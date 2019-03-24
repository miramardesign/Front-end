import { Pipe, PipeTransform } from '@angular/core';
import { isNumber } from 'util';
import { Statement } from '@angular/compiler';

@Pipe({
  name: 'agoPipe'
})
export class AgoPipePipe implements PipeTransform {

  transform(value: number, args?: any): any {

    if (!isNumber(value)) {
      return null;
    }

    if (value > 60 * 60 * 60) {
      return ( value / 60 / 60 / 60 ) + ' hours ago';
    }
    // else
    if (value > 60 * 60) {
      return (value / 60 / 60) + ' minutes ago';
    }




  }


}
