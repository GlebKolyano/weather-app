import { createAction, props } from '@ngrx/store';
import {
  CurrentForecastActions,
  ICurrentForecastError,
  ICurrentForecastResponse,
} from '../models/current-forecast.models';

const getCurrentForecast = createAction(
  CurrentForecastActions.GET_CURRENT_FORECAST,
  props<{ cityName: string }>(),
);
const getCurrentForecastSuccess = createAction(
  CurrentForecastActions.GET_CURRENT_FORECAST_SUCCESS,
  props<{ currentForecastResponse: ICurrentForecastResponse }>(),
);
const getCurrentForecastError = createAction(
  CurrentForecastActions.GET_CURRENT_FORECAST_ERROR,
  props<{ error: ICurrentForecastError }>(),
);

export { getCurrentForecast, getCurrentForecastSuccess, getCurrentForecastError };
