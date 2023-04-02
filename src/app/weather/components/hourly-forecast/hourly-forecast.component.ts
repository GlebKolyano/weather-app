import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectForecastIsLoading,
  selectHourlyForecastForToday,
} from '../../store/selectors/forecast.selectors';

@Component({
  selector: 'app-hourly-forecast',
  templateUrl: './hourly-forecast.component.html',
  styleUrls: ['./hourly-forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HourlyForecastComponent {
  public hourlyForecast$ = this.store.select(selectHourlyForecastForToday);
  public isLoading$ = this.store.select(selectForecastIsLoading);

  constructor(private store: Store) {}
}
