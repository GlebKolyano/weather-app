import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { EventsInterceptor } from './events.interceptor';
import { RequestCacheInterceptor } from './request-cache.interceptor';
import { WeatherInterceptor } from './weather.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: EventsInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: WeatherInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: RequestCacheInterceptor, multi: true },
];
