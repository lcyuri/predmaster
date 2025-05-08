import React, { useEffect, useState } from 'react';
import AlarmCard from './AlarmCard';
import { MainProps } from '../models/component';
import { ALARM_HEADERS, ALARM_TYPES, PREVISION_HEADERS, SETTINGS_HEADERS } from '../constants/generic';
import PMTable from './PMTable';
import { Prevision } from '../models/prevision';
import { getAlarmTableData, getPrevisionTableData, getSettingsTableData } from '../utils/genericUtils';

const Main: React.FC<MainProps> = ({
  alarms,
  previsions,
  settings,
  currentPage
}) => {
  const [tableHeaders, setTableHeaders] = useState<any>([]);
  const [tableData, setTableData] = useState<any[]>([]);

  const setAlarmStatus = (prevision: Prevision): string => {
    const failurePredictability = parseInt(prevision.failurePredictability);

    if (failurePredictability >= 121 && failurePredictability <= 365) {
      return 'Verde';
    } else if (failurePredictability >= 60 && failurePredictability <= 120) {
      return 'Amarelo';
    } else if (failurePredictability >= 0 && failurePredictability < 60) {
      return 'Vermelho';
    } else {
      return 'Transparente';
    }
  }

  useEffect(() => {
    previsions.forEach(prevision => {
      prevision.alarmStatus = setAlarmStatus(prevision);
    });
  }, [previsions]);

  useEffect(() => {
    switch (currentPage) {
      case '/prevision':
        setTableHeaders(PREVISION_HEADERS);
        setTableData(getPrevisionTableData(previsions));
      break;
      case '/alarm':
        setTableHeaders(ALARM_HEADERS);
        setTableData(getAlarmTableData(alarms));
      break;
      case '/settings':
        setTableHeaders(SETTINGS_HEADERS);
        setTableData(getSettingsTableData(settings));
      break;
    }
  }, [currentPage]);

  const getCardTitle = (type: string): string => {
    switch (type) {
      case 'Vermelho':
        return 'Alarme Vermelho';
      case 'Amarelo':
        return 'Alarme Amarelo';
      case 'Verde':
        return 'Alarme Verde';
      default:
        return 'Sem Conexão';
    }
  }

  const getTotalPerType = (type: string): string => {
    const total = previsions.filter(prevision => prevision.alarmStatus === type).length;
    return total.toString() + ' alarmes';
  }

  const getPorcentage = (type: string): string => {
    const total = previsions.length;
    const totalPerType = previsions.filter(prevision => prevision.alarmStatus === type).length;
    const porcentage = Math.round((totalPerType / total) * 100);
    return porcentage.toString() + '%';
  }

  return (
    <div className='container mt-4' style={{maxWidth: '1320px'}}>
      <div className='row'>
        {ALARM_TYPES.map(type => (
          <div key={type} className={'col-md-3 mb-3 d-flex'}>
            <AlarmCard
              color={type}
              title={getCardTitle(type)}
              total={getTotalPerType(type)}
              porcentage={getPorcentage(type)}
            />
          </div>
        ))}
      </div>
      <div className='row justify-content-center'>
        <div className='col-md-12 mt-4'>
          <PMTable headers={tableHeaders} data={tableData}/>
        </div>
      </div>
    </div>
  );
};

export default Main;