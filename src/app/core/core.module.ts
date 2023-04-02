import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { httpInterceptorProviders } from './interceptors/interceptors';
import { WeatherModule } from '../weather/weather.module';

@NgModule({
  declarations: [],
  imports: [BrowserModule, CommonModule, CoreRoutingModule, WeatherModule],
  providers: [httpInterceptorProviders],
})
export class CoreModule {}
