import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { WeatherService } from '../../services/weather.service';
import { getCitiesError, getCitiesSuccess } from '../actions/cities.actions';
import { CitiesActions, ICitiesError } from '../models/cities.models';

@Injectable()
export class CitiesEffects {
  getCities$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CitiesActions.GET_CITIES),
      mergeMap(({ cityName }) => {
        return this.weatherService.getCities(cityName).pipe(
          map((cities) => getCitiesSuccess({ cities })),
          catchError((error: ICitiesError) => of(getCitiesError({ error }))),
        );
      }),
    );
  });

  constructor(private actions$: Actions, private weatherService: WeatherService) {}
}
