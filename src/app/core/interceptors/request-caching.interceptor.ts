import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpRequest,
  HttpResponse,
  HttpInterceptor,
  HttpHandler,
} from '@angular/common/http';

import { Observable, of, tap } from 'rxjs';

import { RequestCachingService } from '../services/request-caching.service';
import { WeatherUrls } from 'src/app/weather/constants/weather-api';

@Injectable()
export class RequestCachingInterceptor implements HttpInterceptor {
  constructor(private cacheService: RequestCachingService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const permittedApiForCache = Object.values(WeatherUrls) as string[];

    if (req.method !== 'GET' && permittedApiForCache.includes(req.url)) {
      return next.handle(req);
    }

    const cachedResponse = this.cacheService.getCachedResponse(req);

    if (cachedResponse) {
      return of(new HttpResponse({ ...cachedResponse, url: cachedResponse.url! }));
    }

    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          this.cacheService.cacheResponse(req, event.clone());
        }
      }),
    );
  }
}
