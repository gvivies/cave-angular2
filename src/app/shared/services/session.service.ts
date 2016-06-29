import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SessionService {

  private connectedUser: BehaviorSubject<User>;

  constructor() {
    this.connectedUser = new BehaviorSubject<User>(null);
  }

  public setConnectedUser(newUser: User): void {
    this.connectedUser.next(newUser);
  }

  public getConnectedUser(): BehaviorSubject<User> {
    return this.connectedUser;
  }

  public getCurrentUser(): User {
    return this.connectedUser.getValue();
  }

}
