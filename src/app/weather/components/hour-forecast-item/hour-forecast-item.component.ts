import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IForecastHour } from '../../store/models/forecast.models';

@Component({
  selector: 'app-hour-forecast-item',
  templateUrl: './hour-forecast-item.component.html',
  styleUrls: ['./hour-forecast-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HourForecastItemComponent {
  @Input() hourForecast!: IForecastHour;
}
