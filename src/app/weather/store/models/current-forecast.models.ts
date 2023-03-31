interface ICurrentForecastState {
  location: ILocation | null;
  currentForecast: ICurrentForecast | null;
  error: ICurrentForecastError | null;
  isLoading: boolean;
}

interface ICurrentForecastResponse {
  location: ILocation;
  current: ICurrentForecast;
}

interface ICurrentForecast {
  temp_c: number;
  condition: ICurrentForecastCodition;
}

interface ICurrentForecastCodition {
  text: string;
  icon: string;
  code: number;
}

interface ILocation {
  name: string;
  country: string;
  localtime: string;
}

enum CurrentForecastActions {
  GET_CURRENT_FORECAST = '[Weather] Get Current Forecast',
  GET_CURRENT_FORECAST_SUCCESS = '[Weather] Get Current Forecast success',
  GET_CURRENT_FORECAST_ERROR = '[Weather] Get Current Forecast error',
}

interface ICurrentForecastError {
  status: number;
  message: string;
}

export { CurrentForecastActions };
export type {
  ICurrentForecastResponse,
  ICurrentForecastError,
  ICurrentForecastState,
  ILocation,
  ICurrentForecast,
};
