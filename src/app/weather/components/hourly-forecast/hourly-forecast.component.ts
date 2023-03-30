import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectHourlyForecastForToday } from '../../store/selectors/forecast.selectors';

@Component({
  selector: 'app-hourly-forecast',
  templateUrl: './hourly-forecast.component.html',
  styleUrls: ['./hourly-forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HourlyForecastComponent {
  public hoursForecast$ = this.store.select(selectHourlyForecastForToday);
  constructor(private store: Store) {}
}
