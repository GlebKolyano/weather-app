import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CitiesEffects } from './store/effects/cities.effects';
import { WeatherService } from './services/weather.service';
import { CitySelectorComponent } from './components/city-selector/city-selector.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { weatherReducer } from './store';
import { ForecastEffects } from './store/effects/forecast.effects';
import { CurrentForecastEffects } from './store/effects/current-forecast.effects';
import { CurrentForecastComponent } from './components/current-forecast/current-forecast.component';
import { DailyForecastComponent } from './components/daily-forecast/daily-forecast.component';
import { HourlyForecastComponent } from './components/hourly-forecast/hourly-forecast.component';
import { DayForecastItemComponent } from './components/day-forecast-item/day-forecast-item.component';
import { HourForecastItemComponent } from './components/hour-forecast-item/hour-forecast-item.component';
import { WeatherPageComponent } from './pages/weather-page/weather-page.component';
import { CalendarModule } from '../calendar/calendar.module';
import { AuthModule } from '../auth/auth.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BackgroundImageByCodeDirective } from './directives/background-image-by-code.directive';
import { BackgroundColorByCodeDirective } from './directives/background-color-by-code.directive';
import { DegreesCelciusPipe } from './pipes/degrees-celcius.pipe';
import { ForecastComponent } from './components/forecast/forecast.component';

@NgModule({
  declarations: [
    CitySelectorComponent,
    CurrentForecastComponent,
    DailyForecastComponent,
    HourlyForecastComponent,
    DayForecastItemComponent,
    HourForecastItemComponent,
    WeatherPageComponent,
    BackgroundImageByCodeDirective,
    DegreesCelciusPipe,
    ForecastComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('weather', weatherReducer),
    EffectsModule.forFeature([CitiesEffects, ForecastEffects, CurrentForecastEffects]),
    CalendarModule,
    AuthModule,
    BackgroundColorByCodeDirective,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
  ],
  providers: [WeatherService],
  exports: [],
})
export class WeatherModule {}
