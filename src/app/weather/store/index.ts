import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { ICitiesState } from './models/cities.models';
import { IForecastState } from './models/forecast.models';
import { ICurrentForecastState } from './models/current-forecast.models';
import { citiesReducer } from './reducers/cities.reducers';
import { forecastReducer } from './reducers/forecast.reducers';
import { currentForecastReducer } from './reducers/current-forecast.reducers';

interface IWeatherState {
  cities: ICitiesState;
  forecast: IForecastState;
  currentForecast: ICurrentForecastState;
}

const selectFeatureWeather = createFeatureSelector<IWeatherState>('weather');

const weatherReducer: ActionReducerMap<IWeatherState> = {
  cities: citiesReducer,
  forecast: forecastReducer,
  currentForecast: currentForecastReducer,
};

export { selectFeatureWeather, weatherReducer };
