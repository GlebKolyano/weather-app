import { createSelector } from '@ngrx/store';
import { selectFeatureWeather } from '..';

const selectForcast = createSelector(selectFeatureWeather, ({ forecast }) => forecast);

export { selectForcast };
