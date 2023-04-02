import { createAction, props } from '@ngrx/store';
import { EventsActions, IEvent, IEventsError } from './events.models';

const getEvents = createAction(EventsActions.GET_EVENTS);
const getEventsSuccess = createAction(
  EventsActions.GET_EVENTS_SUCCESS,
  props<{ events: IEvent[] }>(),
);
const getEventsError = createAction(
  EventsActions.GET_EVENTS_ERROR,
  props<{ error: IEventsError }>(),
);

export { getEvents, getEventsSuccess, getEventsError };
