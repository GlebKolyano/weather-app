import { createReducer, on } from '@ngrx/store';
import { getEvents, getEventsError, getEventsSuccess } from './events.actions';
import { IEventsState } from './events.models';
import { initialEventsState } from './events.state';

const eventsReducer = createReducer(
  initialEventsState,
  on(getEvents, (state): IEventsState => {
    return { ...state, isLoading: true };
  }),
  on(getEventsSuccess, (state, { events }): IEventsState => {
    console.log('events', events);
    return { ...state, isLoading: false, events };
  }),
  on(getEventsError, (state, { error }): IEventsState => {
    return { ...state, isLoading: false, error };
  }),
);

export { eventsReducer };
