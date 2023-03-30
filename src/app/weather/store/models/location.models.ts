interface ILocationState {
  location: ILocation | null;
  error: ILocationError | null;
  isLoading: boolean;
}

interface ILocationResponse {
  location: ILocation;
}

interface ILocation {
  name: string;
  country: string;
  localtime: string;
}

enum LocationActions {
  GET_LOCATION = '[Weather] Get Location',
  GET_LOCATION_SUCCESS = '[Weather] Get Location success',
  GET_LOCATION_ERROR = '[Weather] Get Location error',
}

interface ILocationError {
  status: number;
  message: string;
}

export { LocationActions };
export type { ILocationResponse, ILocationError, ILocationState, ILocation };
