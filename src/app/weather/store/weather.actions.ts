import { createAction, props } from '@ngrx/store';
import { CitiesActions, ICity, IWeatherError } from './weather.models';

const getCities = createAction(CitiesActions.GET_CITIES, props<{ cityName: string }>());
const getCitiesSuccess = createAction(
  CitiesActions.GET_CITIES_SUCCESS,
  props<{ cities: ICity[] }>(),
);
const getCitiesError = createAction(
  CitiesActions.GET_CITIES_ERROR,
  props<{ error: IWeatherError }>(),
);

export { getCities, getCitiesSuccess, getCitiesError };
