import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectDailyForecast,
  selectForecastIsLoading,
} from '../../store/selectors/forecast.selectors';

@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['./daily-forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DailyForecastComponent {
  public dailyForecast$ = this.store.select(selectDailyForecast);
  public isLoading$ = this.store.select(selectForecastIsLoading);

  constructor(private store: Store) {}
}
