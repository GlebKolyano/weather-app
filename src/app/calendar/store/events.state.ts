import { IEventsState } from './events.models';

const initialEventsState: IEventsState = {
  events: [],
  error: null,
  isLoading: false,
};

export { initialEventsState };
