import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DEFAULT_FORECAST_PARAMS, WeatherUrls } from '../constants/weather-api';
import { ICity } from '../store/models/cities.models';
import { IForecastResponse } from '../store/models/forecast.models';
import { ILocation, ILocationResponse } from '../store/models/location.models';
import getBasicFieldsFromCity from '../utils/getBasicFieldsFromCity';

@Injectable()
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  public getCities(city: string): Observable<ICity[]> {
    return this.httpClient
      .get<ICity[]>(WeatherUrls.cities, {
        params: { q: city },
      })
      .pipe(map((cities) => cities.map(getBasicFieldsFromCity)));
  }

  public getLocation(city: string): Observable<ILocation> {
    return this.httpClient
      .get<ILocationResponse>(WeatherUrls.location, {
        params: { q: city },
      })
      .pipe(map((response) => response.location));
  }

  public getForecast(city: string): Observable<IForecastResponse> {
    return this.httpClient.get<IForecastResponse>(WeatherUrls.forecast, {
      params: { q: city, ...DEFAULT_FORECAST_PARAMS },
    });
  }
}
