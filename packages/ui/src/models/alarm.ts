export interface Alarm {
  _id: string;
  date: string;
  time: string;
  sensorName: string;
  machineName: string;
  sensorLocale: string;
  predominantFactor: string;
  clientId: string;
  alarmColor: string;
}