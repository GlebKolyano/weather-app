import { Pipe, PipeTransform } from '@angular/core';
import { IForecastHour } from '../store/models/forecast.models';
import { MAX_AMOUNT_HOURLY_FORECAST } from '../constants/weather';

@Pipe({
  name: 'filterHourlyForecast',
})
export class FilterHourlyForecastPipe implements PipeTransform {
  transform(forecasts: IForecastHour[] | null): IForecastHour[] | null {
    if (forecasts && forecasts.length) {
      const hourlyForecastFromCurrentHours = [];
      const isNotMaxAmountOfItems = () =>
        hourlyForecastFromCurrentHours.length < MAX_AMOUNT_HOURLY_FORECAST;
      const currentHours = new Date(Date.now()).getHours();

      const indexOfCurrentForecastHour = forecasts.findIndex(
        ({ time }) => new Date(time).getHours() === currentHours,
      );

      for (let i = indexOfCurrentForecastHour; i <= forecasts.length - 1; i++) {
        if (isNotMaxAmountOfItems()) hourlyForecastFromCurrentHours.push(forecasts[i]);
        if (i === forecasts.length && isNotMaxAmountOfItems()) i = -1;
      }

      return hourlyForecastFromCurrentHours;
    }

    return null;
  }
}
