import { IForecastState } from '../models/forecast.models';

const initForecastState: IForecastState = {
  forecastDay: [],
  error: null,
  isLoading: false,
};

export { initForecastState };
