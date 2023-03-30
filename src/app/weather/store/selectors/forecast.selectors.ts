import { createSelector } from '@ngrx/store';
import { selectFeatureWeather } from '..';
import { IForecastDay, IForecastHour } from '../models/forecast.models';

const selectForcastDaily = createSelector(
  selectFeatureWeather,
  ({ forecast }): IForecastDay[] => forecast.forecastDay,
);

const selectForcastHourlyForToday = createSelector(
  selectFeatureWeather,
  ({ forecast }): IForecastHour[] => forecast.forecastDay[0].hour,
);
export { selectForcastDaily, selectForcastHourlyForToday };
