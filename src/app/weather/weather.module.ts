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

@NgModule({
  declarations: [CitySelectorComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('weather', weatherReducer),
    EffectsModule.forFeature([CitiesEffects]),
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [WeatherService],
  exports: [CitySelectorComponent],
})
export class WeatherModule {}
