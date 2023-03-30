import { IForecastState } from '../models/forecast.models';

const initForecastState: IForecastState = {
  location: null,
  forecastDay: [],
  error: null,
  isLoading: false,
};

export { initForecastState };
