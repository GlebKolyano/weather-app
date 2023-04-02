import { createSelector } from '@ngrx/store';
import { selectFeatureWeather } from '..';

import { ICurrentForecast, ILocation } from '../models/current-forecast.models';

const selectLocation = createSelector(
  selectFeatureWeather,
  ({ currentForecast }): ILocation | null => currentForecast.location,
);

const selectCurrentForecast = createSelector(
  selectFeatureWeather,
  ({ currentForecast }): ICurrentForecast | null => currentForecast.currentForecast,
);

const selectCurrentForecastLoading = createSelector(
  selectFeatureWeather,
  ({ currentForecast }): boolean => currentForecast.isLoading,
);

const selectCurrentForecastConditionCode = createSelector(
  selectFeatureWeather,
  ({ currentForecast: { currentForecast } }): number => {
    if (currentForecast && currentForecast.condition) return currentForecast.condition.code;
    return 0;
  },
);

export {
  selectLocation,
  selectCurrentForecast,
  selectCurrentForecastConditionCode,
  selectCurrentForecastLoading,
};
