import { createSelector } from '@ngrx/store';
import { selectFeatureWeather } from '..';
import { ICity } from '../models/cities.models';

const selectCities = createSelector(selectFeatureWeather, ({ cities }): ICity[] => cities.cities);

export { selectCities };
