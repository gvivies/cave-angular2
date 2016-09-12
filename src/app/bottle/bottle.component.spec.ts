/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { BottleComponent } from './bottle.component';
import { SessionService } from '../shared/services/session.service';
import { CrudService } from '../shared/services/crud.service';
import { ToolsService } from '../shared/services/tools.service';
import { User } from '../shared/model/user';

class MockCrudService extends CrudService {
  constructor() {
    super(null, null);
  }
  public list(): any {
    return [new User('id', 'username', 'email', 'password', 'newPwd', 'actualPwd', 'confirmPwd', 'role', 'token')];
  };

}

class MockToolsService extends ToolsService {
  constructor() {
    super();
  }
  public clone(): any {

  };
}

class MockSessionService extends SessionService {
  private user = new User('id', 'username', 'email', 'password', 'newPwd', 'actualPwd', 'confirmPwd', 'role', 'token');
  constructor() {
    super();
  }
  public setConnectedUser(): void {
    // Do nothing
  };
  public getConnectedUser(): any {
    return this.user;
  };
  public getCurrentUser(): any {
      return this.user;
  };
}

// https://gist.github.com/wkwiatek/e8a4a9d92abc4739f04f5abddd3de8a7

describe('Component: Bottle', () => {
  beforeEach(() => {
    addProviders([BottleComponent, { provide: CrudService, useClass: MockCrudService },
      { provide: ToolsService, useClass: MockToolsService },
      { provide: SessionService , useClass: MockSessionService }]);
    });

    it('should create an instance', inject([BottleComponent], (component: BottleComponent) => {
      expect(component).toBeTruthy();
    }));
  });
