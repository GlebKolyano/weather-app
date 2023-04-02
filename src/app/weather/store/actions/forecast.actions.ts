import { createAction, props } from '@ngrx/store';
import { ForecastActions, IForecastError, IForecastResponse } from '../models/forecast.models';

const getForecast = createAction(ForecastActions.GET_FORCAST, props<{ cityName: string }>());
const getForecastSuccess = createAction(
  ForecastActions.GET_FORCAST_SUCCESS,
  props<{ forecast: IForecastResponse }>(),
);
const getForecastError = createAction(
  ForecastActions.GET_FORCAST_ERROR,
  props<{ error: IForecastError }>(),
);

export { getForecast, getForecastSuccess, getForecastError };
