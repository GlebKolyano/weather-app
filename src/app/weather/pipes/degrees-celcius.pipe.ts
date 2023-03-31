import { Pipe, PipeTransform } from '@angular/core';
import { DEGREE_SYMBOL } from '../constants/symbols';

type DegreesCelciusValueType = number | string | null;
type DegreesCelciusReturnType = string | null;

@Pipe({
  name: 'degreesCelcius',
})
export class DegreesCelciusPipe implements PipeTransform {
  transform(value: DegreesCelciusValueType): DegreesCelciusReturnType {
    return value ? `${value}${DEGREE_SYMBOL}` : null;
  }
}
