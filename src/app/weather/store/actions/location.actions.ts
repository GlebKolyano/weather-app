import { createAction, props } from '@ngrx/store';
import { LocationActions, ILocationError, ILocation } from '../models/location.models';

const getLocation = createAction(LocationActions.GET_LOCATION, props<{ cityName: string }>());
const getLocationSuccess = createAction(
  LocationActions.GET_LOCATION_SUCCESS,
  props<{ location: ILocation }>(),
);
const getLocationError = createAction(
  LocationActions.GET_LOCATION_ERROR,
  props<{ error: ILocationError }>(),
);

export { getLocation, getLocationSuccess, getLocationError };
