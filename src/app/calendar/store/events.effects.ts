import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CalendarService } from '../services/calendar.service';
import { getEventsError, getEventsSuccess } from './events.actions';
import { EventsActions, IEventsError } from './events.models';

@Injectable()
export class EventsEffects {
  getEvents$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EventsActions.GET_EVENTS),
      mergeMap(() => {
        return this.calendarService.getEvents().pipe(
          map((events) => getEventsSuccess({ events })),
          catchError((error: IEventsError) => {
            if (error.statusCode === '401') this.authService.authState$.next(false);
            return of(getEventsError({ error }));
          }),
        );
      }),
    );
  });

  constructor(
    private actions$: Actions,
    private calendarService: CalendarService,
    private authService: AuthService,
  ) {}
}
