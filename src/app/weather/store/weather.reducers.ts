import { createReducer, on } from '@ngrx/store';
import { getCities, getCitiesError, getCitiesSuccess } from './weather.actions';
import { IWeatherState } from './weather.models';
import { initialWeatherState } from './weather.state';

const weatherReducer = createReducer(
  initialWeatherState,
  on(getCities, (state): IWeatherState => {
    return { ...state, isLoading: true };
  }),
  on(getCitiesSuccess, (state, { cities }): IWeatherState => {
    console.log(cities);
    return { ...state, isLoading: false, cities };
  }),
  on(getCitiesError, (state, { error }): IWeatherState => {
    return { ...state, isLoading: false, error };
  }),
);

export { weatherReducer };
