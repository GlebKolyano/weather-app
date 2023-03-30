import { IForecastState } from '../models/forecast.models';

const initForecastState: IForecastState = {
  forecastDays: [],
  error: null,
  isLoading: false,
};

export { initForecastState };
