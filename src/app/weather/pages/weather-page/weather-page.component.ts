import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { BackgroundColorByCodeDirective } from '../../directives/background-color-by-code.directive';

import { selectCurrentForecastConditionCode } from '../../store/selectors/current-forecast.selectors';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [BackgroundColorByCodeDirective],
})
export class WeatherPageComponent implements OnInit, OnDestroy {
  public currentForecastConditionCode$ = this.store.select(selectCurrentForecastConditionCode);

  private conditionCodeSub: Subscription = new Subscription();

  constructor(
    private store: Store,
    private backgroundColorByCodeDirective: BackgroundColorByCodeDirective,
  ) {}

  public ngOnInit() {
    this.conditionCodeSub = this.currentForecastConditionCode$.subscribe((code) => {
      this.backgroundColorByCodeDirective.conditionCode = code;
    });
  }

  public ngOnDestroy() {
    this.conditionCodeSub.unsubscribe();
  }
}
