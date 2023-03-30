import { createSelector } from '@ngrx/store';
import { selectFeatureWeather } from '..';

import { ILocation } from '../models/location.models';

const selectLocation = createSelector(
  selectFeatureWeather,
  ({ location }): ILocation | null => location.location,
);

export { selectLocation };
