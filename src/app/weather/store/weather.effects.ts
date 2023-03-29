import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { WeatherService } from '../services/weather.service';
import { getCitiesError, getCitiesSuccess } from './weather.actions';
import { CitiesActions, IWeatherError } from './weather.models';

@Injectable()
export class WeatherEffects {
  getCities$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CitiesActions.GET_CITIES),
      mergeMap(({ cityName }) => {
        return this.weatherService.getCities(cityName).pipe(
          map((cities) => getCitiesSuccess({ cities })),
          catchError((error: IWeatherError) => of(getCitiesError({ error }))),
        );
      }),
    );
  });

  constructor(private actions$: Actions, private weatherService: WeatherService) {}
}
