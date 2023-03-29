import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EventsComponent } from './components/events/events.component';
import { CalendarService } from './services/calendar.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { eventsReducer } from './store/events.reducers';
import { EventsEffects } from './store/events.effects';

@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('events', eventsReducer),
    EffectsModule.forFeature([EventsEffects]),
  ],
  providers: [CalendarService],
  exports: [EventsComponent],
})
export class CalendarModule {}
