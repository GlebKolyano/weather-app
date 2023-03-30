import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherUrls, WEATHER_API_KEY } from 'src/app/weather/constants/weather-api';

@Injectable()
export class WeatherInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const params = request.params.set('key', WEATHER_API_KEY);

    switch (request.url) {
      case WeatherUrls.cities:
      case WeatherUrls.forecast:
      case WeatherUrls.currentForecast:
        return next.handle(request.clone({ params }));
      default:
        return next.handle(request);
    }
  }
}
