import { Injectable } from '@angular/core';

@Injectable()
export class ToolsService {

  constructor() {}

  clone(obj: any): any {
      let target = {},
          property;
      for (property of obj) {
          if (obj.hasOwnProperty(property)) {
              target[property] = obj[property];
          }
      }
      return target;
  }
}
