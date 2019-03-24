import { Pipe, PipeTransform } from '@angular/core';
import { isNumber } from 'util';
import { Statement } from '@angular/compiler';

@Pipe({
  name: 'agoPipe'
})
export class AgoPipe implements PipeTransform {

  transform(value: number, args?: any): any {

    if (!value) {
      return null;
    }

    const seconds = 60;
    const minutes = Math.pow(seconds, 2);
    const hours = Math.pow(seconds, 3);
    const days = hours * 24;
    const years = days * 365.25;

    if (value < seconds) {
      return Math.floor( seconds) + ' seconds ago';
    }  else if (value > minutes) {
      return Math.floor( value / minutes) + ' minutes ago';
    } else if (value > hours ) {
      return Math.floor( value / hours ) + ' hours ago';
    } else if (value > days ) {
      return Math.floor( value / days ) + ' days ago';
    } else if (value > years ) {
      return Math.floor( value / years ) + ' years ago';
    }

  }


}
