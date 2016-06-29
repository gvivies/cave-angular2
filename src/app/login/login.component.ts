import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Authent } from '../shared/model/authent';
import { User } from '../shared/model/user';
import { Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environment';
import 'rxjs/add/operator/map';
import { SessionService } from '../shared/services/session.service';
import { FormBuilder, ControlGroup, Validators } from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
@Injectable()
export class LoginComponent implements OnInit {

  authentication: Authent;
  loginForm: ControlGroup;
  http: Http;
  headers: Headers;
  currentUser: User;
  userLogged: boolean = false;
  error: string;
  sessionService: SessionService;
  router: Router;

  constructor(http: Http, sessionService: SessionService, router: Router, formBuilder: FormBuilder) {

    this.http = http;
    this.sessionService = sessionService;
    this.router = router;

    this.authentication = new Authent('','');
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-Requested-With', 'XMLHttpRequest');
  }

  ngOnInit() {
  }

  onSubmit() {
    let basicAuth, headers, authent;
    basicAuth = "Basic " + //
    btoa(this.authentication.username + ":" + this.authentication.password);
    authent = '{ "auth": "'+ basicAuth + '"}';

    this.log(authent).subscribe(user => {
      this.currentUser = user;
      this.sessionService.setConnectedUser(user);
      this.router.navigate(['/bottles']);
    });

    this.sessionService.getConnectedUser().subscribe(user => {
      this.userLogged = (user !== null);
    });

  }

  log(authent: string) {
    return this.http.post( //
      environment.endpoint+ '/login',
      authent, //
      {headers : this.headers}).map(response => response.json());
    }

  }
