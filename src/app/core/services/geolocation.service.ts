import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GEOLOCATION_URL } from '../constants/geolocation-api';
import { IGeolocationResponse } from '../models/geolocation.models';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  private _cityOfUser = new BehaviorSubject('');

  constructor(private httpClient: HttpClient) {
    this.determineUserPosition().subscribe(({ city }) => this._cityOfUser.next(city));
  }

  public get cityOfUser(): Observable<string> {
    return this._cityOfUser.asObservable();
  }

  public determineUserPosition(): Observable<IGeolocationResponse> {
    return this.httpClient.get<IGeolocationResponse>(GEOLOCATION_URL);
  }
}
