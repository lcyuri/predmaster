export const DEFAULT_ALARM = {
    sensorName: 'Não definido',
    alarmColor: '-',
    date: '-',
    prevision: '-'
  };
  
  export const ALARM_TYPES = [
    'Vermelho',
    'Amarelo',
    'Verde',
    'Transparente'
  ];
  
  export const PREVISION_HEADERS = [
    {
      value: 'sensorName',
      label: 'Nome do Sensor'
    },
    {
      value: 'sensorLocale',
      label: 'Localização'
    },
    {
      value: 'machineName',
      label: 'Máquina'
    },
    {
      value: 'failurePredictability',
      label: 'Previsão'
    }
  ];
  
  export const ALARM_HEADERS = [
    {
      value: 'sensorName',
      label: 'Nome do Sensor'
    },
    {
      value: 'sensorLocale',
      label: 'Localização'
    },
    {
      value: 'machineName',
      label: 'Máquina'
    },
    {
      value: 'date',
      label: 'Data'
    },
    {
      value: 'time',
      label: 'Hora'
    },
    {
      value: 'predominantFactor',
      label: 'Fator Predomintante'
    },
    {
      value: 'alarmColor',
      label: 'Cor'
    }
  ];
  
  export const SETTINGS_HEADERS = [
    {
      value: 'sensorName',
      label: 'Nome do Sensor'
    },
    {
      value: 'sensorLocale',
      label: 'Localização'
    },
    {
      value: 'machineName',
      label: 'Máquina'
    },
    {
      value: 'yellowAlarmFFT',
      label: 'FFT Amarelo'
    },
    {
      value: 'redAlarmFFT',
      label: 'FFT Vermelho'
    },
    {
      value: 'yellowAlarmRMS',
      label: 'RMS Amarelo'
    },
    {
      value: 'redAlarmRMS',
      label: 'RMS Vermelho'
    },
    {
      value: 'variableType',
      label: 'Váriavel'
    }
  ];