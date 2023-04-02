interface IEventsState {
  events: IEvent[];
  error: IEventsError | null;
  isLoading: boolean;
}
interface IResponseEvents {
  items: IEvent[];
}

interface IEvent {
  start: StartTime;
  summary: string;
}

type StartTime = { dateTime: string; timeZone: string };

enum EventsActions {
  GET_EVENTS = '[Calendar] Get Events',
  GET_EVENTS_SUCCESS = '[Calendar] Get Events success',
  GET_EVENTS_ERROR = '[Calendar] Get Events error',
}

interface IEventsError {
  status: number;
  message: string;
}

export { EventsActions };
export type { IEventsState, IEvent, IEventsError, IResponseEvents };
