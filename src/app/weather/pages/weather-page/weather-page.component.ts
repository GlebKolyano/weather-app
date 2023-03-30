import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherPageComponent {}
