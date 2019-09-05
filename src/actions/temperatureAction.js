import { getTemperature } from '../services/temperatureApi';

export const FETCH_TEMPERATURE = 'FETCH_TEMPERATURE';
export const FETCH_LOADING = 'FETCH_LOADING';

export const fetchTemperature = () => ({
  type: FETCH_TEMPERATURE,
  payload: getTemperature(),
  pendingType: FETCH_LOADING
});
