import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, takeUntil } from 'rxjs/operators';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCities } from '../../store/selectors/cities.selectors';
import { getCities } from '../../store/actions/cities.actions';
import { getForecast } from '../../store/actions/forecast.actions';
import { Subject } from 'rxjs';
import { GeolocationService } from 'src/app/core/services/geolocation.service';

export interface User {
  name: string;
}

@Component({
  selector: 'app-city-selector',
  templateUrl: './city-selector.component.html',
  styleUrls: ['./city-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitySelectorComponent implements OnInit, OnDestroy {
  public cityInput = new FormControl<string>('');

  public cities$ = this.store.select(selectCities);
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private store: Store, private geolocationService: GeolocationService) {}
  public ngOnInit(): void {
    this.getCitiesByInput();
    this.sendRequestsByUserPosition();
  }

  private getCitiesByInput(): void {
    this.cityInput.valueChanges
      .pipe(
        filter((cityName) => cityName!.length >= 3),
        debounceTime(500),
        distinctUntilChanged(),
        takeUntil(this.destroy$),
      )
      .subscribe((cityName) => {
        this.store.dispatch(getCities({ cityName: cityName as string }));
      });
  }

  private sendRequestsByUserPosition(): void {
    this.geolocationService.cityOfUser.pipe(takeUntil(this.destroy$)).subscribe((city) => {
      this.cityInput.setValue(city);
      this.onSelectOption(city);
    });
  }

  public onSelectOption(cityName: string): void {
    this.store.dispatch(getForecast({ cityName }));
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
