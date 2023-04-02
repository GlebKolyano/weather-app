import { ICurrentForecastState } from '../models/current-forecast.models';

const initCurrentForecastState: ICurrentForecastState = {
  location: null,
  currentForecast: null,
  error: null,
  isLoading: false,
};

export { initCurrentForecastState };
