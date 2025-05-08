import { Alarm } from '../models/alarm';
import { AlarmTableData, PrevisionTableData, SettingsTableData } from '../models/component';
import { Prevision } from '../models/prevision';
import { Settings } from '../models/settings';

export const adjustPrevisonDate = (prevision: string): string => {
  const parts = prevision.split(',');
  return parts[0]?.trim() + ' dias';
}

export const getPrevisionTableData = (previsions: Prevision[]): PrevisionTableData[] => {
  return previsions.map(prevision => ({
    sensorName: prevision.sensorName,
    sensorLocale: prevision.sensorLocale,
    machineName: prevision.machineName,
    failurePredictability: adjustPrevisonDate(prevision.failurePredictability),
  }));
}

export const getAlarmTableData = (alarms: Alarm[]): AlarmTableData[] => {
  return alarms.map(alarm => ({
    sensorName: alarm.sensorName,
    sensorLocale: alarm.sensorLocale,
    machineName: alarm.machineName,
    data: alarm.date,
    time: alarm.time,
    predominantFactor: alarm.predominantFactor,
    alarmColor: alarm.alarmColor,
  }));
}

export const getSettingsTableData = (settings: Settings[]): SettingsTableData[] => {
  return settings.map(sensor => ({
    sensorName: sensor.sensorName,
    sensorLocale: sensor.sensorLocale,
    machineName: sensor.machineName,
    yellowAlarmFFT: sensor.yellowAlarmFFT,
    redAlarmFFT: sensor.redAlarmFFT,
    yellowAlarmRMS: sensor.yellowAlarmRMS,
    redAlarmRMS: sensor.redAlarmRMS,
    variableType: sensor.variableType
  }));
}