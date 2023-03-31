import { Directive, Input, HostBinding } from '@angular/core';
import {
  CLOUDY,
  FOGGY,
  RAINY,
  RAINY_AND_SUNNY,
  SNOWY,
  SNOWY_AND_SUNNY,
  SUNNY,
  SUNNY_AND_CLOUDY,
  THUNDERSTORMY,
} from '../constants/background-codes';
import { BackgroundColors } from '../constants/background.models';

@Directive({
  selector: '[appBackgroundColorByCode]',
  standalone: true,
})
export class BackgroundColorByCodeDirective {
  private backgroundColor: string = '';

  @Input() set conditionCode(code: number) {
    if (code) {
      this.backgroundColor = this.getColorByCode(code);
    }
  }

  @HostBinding('style.background-color') get getBackgroundColor(): string {
    return this.backgroundColor;
  }

  private getColorByCode(code: number): BackgroundColors {
    switch (true) {
      case SUNNY.includes(code):
        return BackgroundColors.sunny;
      case CLOUDY.includes(code):
        return BackgroundColors.cloudy;
      case RAINY.includes(code):
        return BackgroundColors.rainy;
      case FOGGY.includes(code):
        return BackgroundColors.foggy;
      case SNOWY.includes(code):
        return BackgroundColors.snowy;
      case SUNNY_AND_CLOUDY.includes(code):
        return BackgroundColors.sunnyAndCloudy;
      case RAINY_AND_SUNNY.includes(code):
        return BackgroundColors.sunny;
      case THUNDERSTORMY.includes(code):
        return BackgroundColors.thunderstormy;
      case SNOWY_AND_SUNNY.includes(code):
        return BackgroundColors.snowyAndSunny;
      default:
        return BackgroundColors.default;
    }
  }
}
