import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CalendarApiEndpoints, CalendarUrls } from 'src/app/calendar/constants/calendarApi';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable()
export class EventsInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.authService.accessToken}`,
    );

    switch (request.url) {
      case CalendarApiEndpoints.events:
        return next.handle(request.clone({ url: CalendarUrls.events, headers }));
      default:
        return next.handle(request);
    }
  }
}
