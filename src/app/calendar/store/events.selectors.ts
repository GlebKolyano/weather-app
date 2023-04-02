import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IEvent, IEventsState } from './events.models';

const selectFeatureEvents = createFeatureSelector<IEventsState>('events');

const selectEvents = createSelector(selectFeatureEvents, (state): IEvent[] => state.events);

export { selectFeatureEvents, selectEvents };
