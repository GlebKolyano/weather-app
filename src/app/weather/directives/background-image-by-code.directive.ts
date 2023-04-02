import { Directive, HostBinding, Input } from '@angular/core';
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
import { BackgroundImages } from '../models/background.models';
import getSrcBackgroundImageProperty from '../utils/getSrcBackgroundImageProperty';

@Directive({
  selector: '[appBackgroundImageByCode]',
})
export class BackgroundImageByCodeDirective {
  private srcBackgroundImage: string = '';

  @Input() set conditionCode(code: number | null) {
    if (code) {
      const imageName = this.getImageNameByCode(code);
      this.setSrcBackgroundImageValue(imageName);
    }
  }

  @HostBinding('style.background') get getBackgroundImage(): string {
    return this.srcBackgroundImage;
  }

  private setSrcBackgroundImageValue(imageName: string): void {
    this.srcBackgroundImage = getSrcBackgroundImageProperty(imageName);
  }

  private getImageNameByCode(code: number): BackgroundImages {
    switch (true) {
      case SUNNY.includes(code):
        return BackgroundImages.sunny;
      case CLOUDY.includes(code):
        return BackgroundImages.cloudy;
      case RAINY.includes(code):
        return BackgroundImages.rainy;
      case FOGGY.includes(code):
        return BackgroundImages.foggy;
      case SNOWY.includes(code):
        return BackgroundImages.snowy;
      case SUNNY_AND_CLOUDY.includes(code):
        return BackgroundImages.sunnyAndCloudy;
      case RAINY_AND_SUNNY.includes(code):
        return BackgroundImages.sunny;
      case THUNDERSTORMY.includes(code):
        return BackgroundImages.thunderstormy;
      case SNOWY_AND_SUNNY.includes(code):
        return BackgroundImages.snowyAndSunny;
      default:
        return BackgroundImages.default;
    }
  }
}
