import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FORECAST_TYPES } from '../../constants/weather';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastComponent {
  public typesForecast = FORECAST_TYPES;
  public enabledTypeForecast = new FormControl(this.typesForecast[0]);
}
