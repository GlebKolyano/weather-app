import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { WeatherService } from '../../services/weather.service';
import { getForecastError, getForecastSuccess } from '../actions/forecast.actions';
import { ForecastActions, IForecastError } from '../models/forecast.models';

@Injectable()
export class ForecastEffects {
  getForecast$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ForecastActions.GET_FORCAST),
      mergeMap(({ cityName }) => {
        return this.weatherService.getForecast(cityName).pipe(
          map((forecast) => getForecastSuccess({ forecast })),
          catchError((error: IForecastError) => of(getForecastError({ error }))),
        );
      }),
    );
  });

  constructor(private actions$: Actions, private weatherService: WeatherService) {}
}
