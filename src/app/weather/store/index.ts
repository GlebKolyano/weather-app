import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { ICitiesState } from './models/cities.models';
import { IForecastState } from './models/forecast.models';
import { citiesReducer } from './reducers/cities.reducers';
import { forecastReducer } from './reducers/forecast.reducers';

interface IWeatherState {
  cities: ICitiesState;
  forecast: IForecastState;
}

const selectFeatureWeather = createFeatureSelector<IWeatherState>('weather');

const weatherReducer: ActionReducerMap<IWeatherState> = {
  cities: citiesReducer,
  forecast: forecastReducer,
};

export { selectFeatureWeather, weatherReducer };
