export interface Prevision {
  _id: string;
  failurePredictability: string;
  sensorName: string;
  predominantFactor: string;
  machineName: string;
  sensorLocale: string;
  clientId: string;
  creationDate: Date;
  alarmStatus?: string;
}