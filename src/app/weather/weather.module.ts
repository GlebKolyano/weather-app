import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CitiesEffects } from './store/effects/cities.effects';
import { WeatherService } from './services/weather.service';
import { CitySelectorComponent } from './components/city-selector/city-selector.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { weatherReducer } from './store';
import { ForecastEffects } from './store/effects/forecast.effects';
import { LocationEffects } from './store/effects/location.effects';
import { CurrentLocationComponent } from './components/current-location/current-location.component';
import { DailyForecastComponent } from './components/daily-forecast/daily-forecast.component';
import { HourlyForecastComponent } from './components/hourly-forecast/hourly-forecast.component';
import { DayForecastItemComponent } from './components/day-forecast-item/day-forecast-item.component';
import { HourForecastItemComponent } from './components/hour-forecast-item/hour-forecast-item.component';

@NgModule({
  declarations: [
    CitySelectorComponent,
    CurrentLocationComponent,
    DailyForecastComponent,
    HourlyForecastComponent,
    DayForecastItemComponent,
    HourForecastItemComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('weather', weatherReducer),
    EffectsModule.forFeature([CitiesEffects, ForecastEffects, LocationEffects]),
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [WeatherService],
  exports: [
    CitySelectorComponent,
    CurrentLocationComponent,
    DailyForecastComponent,
    HourlyForecastComponent,
  ],
})
export class WeatherModule {}
