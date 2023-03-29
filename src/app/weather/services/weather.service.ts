import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { WeatherUrls } from '../constants/weatherApi';
import { ICity } from '../store/weather.models';
import getBasicFieldsFromCity from '../utils/getBasicFieldsFromCity';

@Injectable()
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  public getCities(city: string): Observable<ICity[]> {
    return this.httpClient
      .get<ICity[]>(WeatherUrls.cities, { params: { q: city } })
      .pipe(map((cities) => cities.map(getBasicFieldsFromCity)));
  }
}
