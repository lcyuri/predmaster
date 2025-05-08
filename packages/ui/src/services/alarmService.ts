import axios from 'axios';
import { ALARM_API, API_HOST } from '../constants/routes';

export const getAlarm = async (clientId: string): Promise<any> => {
  try {
    const url = API_HOST + ALARM_API + `?clientId=${clientId}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error: any) {
    console.error('getAlarm - ', error);
    
    if (error.response?.status === 404) {
      throw new Error('Alarme não encontrado.');
    } else {
      throw new Error('Erro ao carregar alarmes.');
    }
  }
}