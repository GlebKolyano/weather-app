import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AuthModule } from '../auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule } from '../calendar/calendar.module';
import { httpInterceptorProviders } from './interceptors/interceptors';

@NgModule({
  declarations: [MainPageComponent],
  imports: [BrowserModule, CommonModule, CoreRoutingModule, CalendarModule, AuthModule],
  providers: [httpInterceptorProviders],
})
export class CoreModule {}
