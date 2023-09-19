import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentual'
})
export class PercentualPipe implements PipeTransform {

  transform(value: number): string {
    return `${value}%`;
  }
}
