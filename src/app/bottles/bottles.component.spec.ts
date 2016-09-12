/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { BottlesComponent } from './bottles.component';
import { CrudService } from '../shared/services/crud.service';
import { ToolsService } from '../shared/services/tools.service';
import { SessionService } from '../shared/services/session.service';
import { User } from '../shared/model/user';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';

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

describe('Component: Bottles', () => {

  beforeEach(() => {
    addProviders([BottlesComponent, BaseRequestOptions, { provide: CrudService, useClass: MockCrudService },
      { provide: ToolsService, useClass: MockToolsService },
      { provide: SessionService , useClass: MockSessionService },
        MockBackend,
      { provide: Http, useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },  deps: [MockBackend, BaseRequestOptions]}
      ]);
    });


  it('should create an instance', inject([BottlesComponent], (component: BottlesComponent) => {
    expect(component).toBeDefined();
  }));
});
