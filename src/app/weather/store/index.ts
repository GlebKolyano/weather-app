import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { ICitiesState } from './models/cities.models';
import { IForecastState } from './models/forecast.models';
import { ILocationState } from './models/location.models';
import { citiesReducer } from './reducers/cities.reducers';
import { forecastReducer } from './reducers/forecast.reducers';
import { locationReducer } from './reducers/location.reducers';

interface IWeatherState {
  cities: ICitiesState;
  forecast: IForecastState;
  location: ILocationState;
}

const selectFeatureWeather = createFeatureSelector<IWeatherState>('weather');

const weatherReducer: ActionReducerMap<IWeatherState> = {
  cities: citiesReducer,
  forecast: forecastReducer,
  location: locationReducer,
};

export { selectFeatureWeather, weatherReducer };
