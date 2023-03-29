interface IWeatherState {
  cities: ICity[];
  error: IWeatherError | null;
  isLoading: boolean;
}

interface ICity {
  name: string;
  country: string;
}

enum CitiesActions {
  GET_CITIES = '[Weather] Get Cities',
  GET_CITIES_SUCCESS = '[Weather] Get Cities success',
  GET_CITIES_ERROR = '[Weather] Get Cities error',
}

interface IWeatherError {
  status: number;
  message: string;
}

export { CitiesActions };
export type { IWeatherState, IWeatherError, ICity };
