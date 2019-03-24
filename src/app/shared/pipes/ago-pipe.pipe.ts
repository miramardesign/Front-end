import { Pipe, PipeTransform } from '@angular/core';
import { isNumber } from 'util';
import { Statement } from '@angular/compiler';
import { I18nPluralPipe } from '@angular/common';

@Pipe({
  name: 'agoPipe'
})
export class AgoPipe implements PipeTransform {

  transform(value: number, args?: any): any {

    console.log('pipe recieved ', value);
    if (!value) {
      return null;
    }

    const minute = 60;
    const hour = Math.pow(minute, 2);
    const day = hour * 24;
    const year = day * 365.25;

    if (value < minute) {
      return Math.floor( value ) + ' seconds ago';
    }  else if (value < hour) {
      return Math.floor( value / minute) + ' minutes ago';
    } else if (value < day ) {
      return Math.floor( value / hour ) + ' hours ago';
    } else if (value < year ) {
      return Math.floor( value / day ) + ' days ago';
    } else if (value >= year ) {
      return Math.floor( value / year ) + ' years ago';
    } else {
      console.log('hit last else');
      return ''; }
  }

}
