import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { WeatherService } from '../../services/weather.service';
import { getLocationError, getLocationSuccess } from '../actions/location.actions';
import { ForecastActions } from '../models/forecast.models';
import { ILocationError } from '../models/location.models';

@Injectable()
export class LocationEffects {
  getLocation$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ForecastActions.GET_FORCAST),
      mergeMap(({ cityName }) => {
        return this.weatherService.getLocation(cityName).pipe(
          map((location) => getLocationSuccess({ location })),
          catchError((error: ILocationError) => of(getLocationError({ error }))),
        );
      }),
    );
  });

  constructor(private actions$: Actions, private weatherService: WeatherService) {}
}
