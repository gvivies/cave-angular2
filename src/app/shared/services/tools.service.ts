import { Injectable } from '@angular/core';

@Injectable()
export class ToolsService {

  constructor() {}

  clone(obj: any): any {
      let target = {}, //
          property, //
          properties = Object.getOwnPropertyNames(obj);

      for (property of properties) {
          if (obj.hasOwnProperty(property)) {
              target[property] = obj[property];
          }
      }
      return target;
  }
}
