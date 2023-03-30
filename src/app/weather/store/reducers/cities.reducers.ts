import { createReducer, on } from '@ngrx/store';
import { getCities, getCitiesError, getCitiesSuccess } from '../actions/cities.actions';
import { ICitiesState } from '../models/cities.models';
import { initCitiesrState } from '../state/cities.state';

const citiesReducer = createReducer(
  initCitiesrState,
  on(getCities, (state): ICitiesState => {
    return { ...state, isLoading: true };
  }),
  on(getCitiesSuccess, (state, { cities }): ICitiesState => {
    return { ...state, isLoading: false, cities };
  }),
  on(getCitiesError, (state, { error }): ICitiesState => {
    return { ...state, isLoading: false, error };
  }),
);

export { citiesReducer };
