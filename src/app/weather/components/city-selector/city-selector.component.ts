import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, startWith } from 'rxjs/operators';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCities } from '../../store/selectors/cities.selectors';
import { getCities } from '../../store/actions/cities.actions';
import { ICity } from '../../store/models/cities.models';

export interface User {
  name: string;
}

@Component({
  selector: 'app-city-selector',
  templateUrl: './city-selector.component.html',
  styleUrls: ['./city-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitySelectorComponent implements OnInit {
  public cityInput = new FormControl<string>('');

  public cities$ = this.store.select(selectCities);

  constructor(private store: Store) {}

  public ngOnInit() {
    this.cityInput.valueChanges
      .pipe(
        startWith(''),
        filter((cityName) => cityName!.length >= 3),
        debounceTime(500),
        distinctUntilChanged(),
      )
      .subscribe((cityName) => this.store.dispatch(getCities({ cityName: cityName as string })));
  }

  public displaySelectedCity(city: ICity): string {
    return city && city.name ? city.name : '';
  }
}
