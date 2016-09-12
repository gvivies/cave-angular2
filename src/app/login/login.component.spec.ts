/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { SessionService } from '../shared/services/session.service';
import { User } from '../shared/model/user';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

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

describe('Component: Login', () => {
  beforeEach(() => {
    addProviders([LoginComponent, BaseRequestOptions,
      { provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); }},
      { provide: SessionService , useClass: MockSessionService },
        MockBackend,
      { provide: Http, useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },  deps: [MockBackend, BaseRequestOptions]}
    ]);
  });

  it('should create an instance', inject([LoginComponent], (component: LoginComponent) => {
    expect(component).toBeTruthy();
  }));
});
