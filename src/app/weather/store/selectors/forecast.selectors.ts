import { createSelector } from '@ngrx/store';
import { selectFeatureWeather } from '..';
import { IForecastDay, IForecastHour } from '../models/forecast.models';

const selectDailyForecast = createSelector(
  selectFeatureWeather,
  ({ forecast }): IForecastDay[] => forecast.forecastDays,
);

const selectHourlyForecastForToday = createSelector(
  selectFeatureWeather,
  ({ forecast }): IForecastHour[] => {
    if (forecast.forecastDays.length) return forecast.forecastDays[0].hour.slice(0, 7);
    return [];
  },
);

export { selectDailyForecast, selectHourlyForecastForToday };
