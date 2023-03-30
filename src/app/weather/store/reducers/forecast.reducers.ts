import { createReducer, on } from '@ngrx/store';
import { getForecast, getForecastError, getForecastSuccess } from '../actions/forecast.actions';
import { IForecastState } from '../models/forecast.models';
import { initForecastState } from '../state/forecast.state';

const forecastReducer = createReducer(
  initForecastState,
  on(getForecast, (state): IForecastState => {
    return { ...state, isLoading: true };
  }),
  on(getForecastSuccess, (state): IForecastState => {
    return { ...state, isLoading: false };
  }),
  on(getForecastError, (state): IForecastState => {
    return { ...state, isLoading: false };
  }),
);

export { forecastReducer };
