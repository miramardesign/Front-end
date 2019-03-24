import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agoPipe'
})

export class AgoPipe implements PipeTransform {

  private itemPluralMapping = {
    second: {
      '=0': 'Just now',
      '=1': 'Just Now',
      other: '# seconds ago'
    },
    minute: {
      '=0' : '1 minute ago',
      '=1': '1 minute ago',
      other: '# minutes ago'
    },
    hour: {
      '=0' : '1 hour ago',
      '=1': '1 hour ago',
      other: '# hours ago'
    },
    day: {
      '=0' : '1 day ago',
      '=1': '1 day ago',
      other: '# days ago'
    },
    year: {
      '=0' : '1 year ago',
      '=1': '1 year ago',
      other: '# years ago'
    },
  };

  /** tried the i181ll mapping, compatible */
  private getMapping(num, key, map) {

    console.log( '====>' + num + '<----num into get mapping==============================');
    // may need error correction if mapping missing
    if (num === 1) {
      return map[key]['=1'];
    } else if (num === 0) {
      return map[key]['=0'];
    } else {
      return map[key][`other`].replace(/\#/, num);
    }
  }

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
      return Math.floor(value) + ' seconds ago';
    } else if (value < hour) {
      const val =  Math.floor( value / minute);
      return this.getMapping(val, 'minute', this.itemPluralMapping);

    } else if (value < day) {
      const val =  Math.floor( value / hour);
      return this.getMapping(val, 'hour', this.itemPluralMapping);
    } else if (value < year) {
      const val =  Math.floor( value / day);
      return this.getMapping(val, 'day', this.itemPluralMapping);
    } else if (value >= year) {
      const val =  Math.floor( value / year);
      return this.getMapping(val, 'year', this.itemPluralMapping);
    }

    console.log('passed all conditions');
    return '';

  }

}
