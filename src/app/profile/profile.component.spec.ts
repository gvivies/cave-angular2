/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';
import { User } from '../shared/model/user';
import { SessionService } from '../shared/services/session.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

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

describe('Component: Profile', () => {
  beforeEach(() => {
    addProviders([ProfileComponent,
      { provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); }},
      { provide: SessionService , useClass: MockSessionService }]);
    });

  it('should create an instance and store current user', inject([ProfileComponent], (component: ProfileComponent) => {
    expect(component).toBeTruthy();
  }));
});
