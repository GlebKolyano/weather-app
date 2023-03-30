interface IForecastState {
  forecastDay: IForecastDay[];
  error: string | null;
  isLoading: boolean;
}

interface IForecastResponse {
  forecast: {
    forecastday: IForecastDay[];
  };
}

interface IForecastDay {
  date: string;
  day: {
    avgtemp_c: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
  };
  hour: IForecastHour[];
}

interface IForecastHour {
  time: string;
  temp_c: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
}

enum ForecastActions {
  GET_FORCAST = '[Weather] Get Forecast',
  GET_FORCAST_SUCCESS = '[Weather] Get Forecast success',
  GET_FORCAST_ERROR = '[Weather] Get Forecast error',
}

interface IForecastError {
  status: number;
  message: string;
}

export { ForecastActions };
export type { IForecastResponse, IForecastError, IForecastState, IForecastDay, IForecastHour };
