import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectDailyForecast } from '../../store/selectors/forecast.selectors';

@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['./daily-forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DailyForecastComponent {
  public daysForecast$ = this.store.select(selectDailyForecast);
  constructor(private store: Store) {}
}
