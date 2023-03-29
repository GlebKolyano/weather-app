import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { EventsInterceptor } from './events.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: EventsInterceptor, multi: true },
];
