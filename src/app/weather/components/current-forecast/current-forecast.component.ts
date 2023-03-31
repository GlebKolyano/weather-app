import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectCurrentForecast,
  selectLocation,
} from '../../store/selectors/current-forecast.selectors';

@Component({
  selector: 'app-current-forecast',
  templateUrl: './current-forecast.component.html',
  styleUrls: ['./current-forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentForecastComponent {
  public location$ = this.store.select(selectLocation);
  public currentForecast$ = this.store.select(selectCurrentForecast);

  constructor(private store: Store) {}
}
