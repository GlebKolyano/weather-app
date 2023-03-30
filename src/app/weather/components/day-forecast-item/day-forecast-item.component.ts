import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IForecastDay } from '../../store/models/forecast.models';

@Component({
  selector: 'app-day-forecast-item',
  templateUrl: './day-forecast-item.component.html',
  styleUrls: ['./day-forecast-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayForecastItemComponent {
  @Input() dayForecast!: IForecastDay;
}
