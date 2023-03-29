import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CalendarApiEndpoints, DEFAULT_EVENTS_PARAMS } from '../constants/calendarApi';
import { IEvent, IResponseEvents } from '../store/events.models';
import getBasicFieldsFromEvent from '../utils/getBasicFieldsFromEvent';

@Injectable()
export class CalendarService {
  constructor(private httpClient: HttpClient, private authService: AuthService) {}

  public getEvents(): Observable<IEvent[]> {
    return this.httpClient
      .get<IResponseEvents>(CalendarApiEndpoints.events, {
        params: DEFAULT_EVENTS_PARAMS,
      })
      .pipe(map(({ items }) => items.map(getBasicFieldsFromEvent)));
  }
}
