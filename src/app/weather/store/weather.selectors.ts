import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICity, IWeatherState } from './weather.models';

const selectFeatureWeather = createFeatureSelector<IWeatherState>('weather');

const selectCities = createSelector(selectFeatureWeather, (state): ICity[] => state.cities);

export { selectFeatureWeather, selectCities };
