import { createReducer, on } from '@ngrx/store';
import { getLocation, getLocationError, getLocationSuccess } from '../actions/location.actions';
import { ILocationState } from '../models/location.models';
import { initLocationState } from '../state/location.state';

const locationReducer = createReducer(
  initLocationState,
  on(getLocation, (state): ILocationState => {
    return { ...state, isLoading: true };
  }),
  on(getLocationSuccess, (state, { location }): ILocationState => {
    return { ...state, isLoading: false, location };
  }),
  on(getLocationError, (state): ILocationState => {
    return { ...state, isLoading: false };
  }),
);

export { locationReducer };
