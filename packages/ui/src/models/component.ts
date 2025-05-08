import { Alarm } from './alarm';
import { Prevision } from './prevision';
import { Settings } from './settings';

export type Pages = '/prevision' | '/settings' | '/alarm' | '/history' | '/login';

export interface HeaderProps {
  clientName?: string;
  currentPage: Pages;
  setCurrentPage: React.Dispatch<React.SetStateAction<any>>;
}

export interface LoginProps {
  setUser: React.Dispatch<React.SetStateAction<any>>;
}

export interface MainProps {
  alarms: Alarm[];
  previsions: Prevision[];
  settings: Settings[];
  currentPage: Pages;
}

export interface AlarmCardProps {
  color: string;
  title: string;
  total: string;
  porcentage: string;
}

export interface TableProps {
  headers: any[];
  data: any[];
}

export interface DefaultTableData {
  sensorName: string;
  sensorLocale: string;
  machineName: string;
}

export interface PrevisionTableData extends DefaultTableData {
  failurePredictability: string;
}

export interface AlarmTableData extends DefaultTableData {
  data: string;
  time: string;
  predominantFactor: string;
  alarmColor: string;
}

export interface SettingsTableData extends DefaultTableData  {
  yellowAlarmFFT: string;
  redAlarmFFT: string;
  yellowAlarmRMS: string;
  redAlarmRMS: string;
  variableType: string;
}