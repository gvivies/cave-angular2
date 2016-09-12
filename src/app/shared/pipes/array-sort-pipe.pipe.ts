import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'NameSort'
})
export class ArraySortPipe implements PipeTransform {

  transform(list: any[], attr: string): any[] {
    if (list === undefined) {
      return null;
    }

    list.sort((a: any, b: any) => {
      if (a[attr] < b[attr]) {
            return -1;
      } else {
            return ((a[attr] === b[attr]) ? 0 : 1);
      }
    });
    return list;
  }

}
