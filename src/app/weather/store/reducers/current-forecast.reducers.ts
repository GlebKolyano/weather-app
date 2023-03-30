import { createReducer, on } from '@ngrx/store';
import {
  getCurrentForecast,
  getCurrentForecastError,
  getCurrentForecastSuccess,
} from '../actions/current-forecast.actions';
import { ICurrentForecastState } from '../models/current-forecast.models';
import { initCurrentForecastState } from '../state/current-forecast.state';

const currentForecastReducer = createReducer(
  initCurrentForecastState,
  on(getCurrentForecast, (state): ICurrentForecastState => {
    return { ...state, isLoading: true };
  }),
  on(
    getCurrentForecastSuccess,
    (state, { currentForecastResponse: { current, location } }): ICurrentForecastState => {
      return { ...state, isLoading: false, location, currentForecast: current };
    },
  ),
  on(getCurrentForecastError, (state): ICurrentForecastState => {
    return { ...state, isLoading: false };
  }),
);

export { currentForecastReducer };
