import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { WeatherService } from '../../services/weather.service';
import {
  getCurrentForecastError,
  getCurrentForecastSuccess,
} from '../actions/current-forecast.actions';
import { ICurrentForecastError } from '../models/current-forecast.models';
import { ForecastActions } from '../models/forecast.models';

@Injectable()
export class CurrentForecastEffects {
  getLocation$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ForecastActions.GET_FORCAST),
      mergeMap(({ cityName }) => {
        return this.weatherService.getCurrentForecast(cityName).pipe(
          map((currentForecastResponse) => getCurrentForecastSuccess({ currentForecastResponse })),
          catchError((error: ICurrentForecastError) => of(getCurrentForecastError({ error }))),
        );
      }),
    );
  });

  constructor(private actions$: Actions, private weatherService: WeatherService) {}
}
