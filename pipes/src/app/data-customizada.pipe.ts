import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataCustomizada'
})
export class DataCustomizadaPipe implements PipeTransform {

  transform(value: Date, args?: string): string {
    let separador: string = '/';
    if (args) {
      separador = args;
    }

    return String(value.getDay()) + separador + String(value.getMonth() + separador + String(value.getFullYear()));
  }

}
