import axios from 'axios';
import { API_HOST, PREVISION_API, } from '../constants/routes';

export const getPrevision = async (clientId: string): Promise<any> => {
  try {
    const url = API_HOST + PREVISION_API + `?clientId=${clientId}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error: any) {
    console.error('getPrevision - ', error);

    if (error.response?.status === 404) {
      throw new Error('Previsão não encontrado.');
    } else {
      throw new Error('Erro ao carregar previsões.');
    }
  }
}