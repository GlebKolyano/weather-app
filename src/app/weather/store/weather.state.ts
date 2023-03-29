import { IWeatherState } from './weather.models';

const initialWeatherState: IWeatherState = {
  cities: [],
  error: null,
  isLoading: false,
};

export { initialWeatherState };
