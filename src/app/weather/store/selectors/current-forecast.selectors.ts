import { createSelector } from '@ngrx/store';
import { selectFeatureWeather } from '..';

import { ILocation } from '../models/current-forecast.models';

const selectLocation = createSelector(
  selectFeatureWeather,
  ({ currentForecast }): ILocation | null => currentForecast.location,
);

const selectCurrentForecastConditionCode = createSelector(
  selectFeatureWeather,
  ({ currentForecast }): number => {
    if (currentForecast.currentForecast) return currentForecast.currentForecast?.condition.code;
    return 0;
  },
);

export { selectLocation, selectCurrentForecastConditionCode };
