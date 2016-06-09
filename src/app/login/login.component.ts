import { Component, OnInit } from '@angular/core';
import { Authent } from '../shared/model/authent';
import { User } from '../shared/model/user';
import { Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  authentication: Authent;
  currentUser: User;
  http: Http;
  headers: Headers;

  constructor(http: Http) {
    this.authentication = new Authent('','');
    this.http = http;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-Requested-With', 'XMLHttpRequest');
    this.currentUser = new User('','','','','','','','','');
  }

  ngOnInit() {
  }

  onSubmit() {
    let basicAuth, headers, authent;

    basicAuth = "Basic " + //
    btoa(this.authentication.username + ":" + this.authentication.password);
    authent = '{ "auth": "'+ basicAuth + '"}';

    this.http.post('http://localhost:1337/localhost:8080/cave/login', authent,
      { headers : this.headers })
      .subscribe(data => {
        let authenticated = data.json();
        this.currentUser = new User(authenticated.id, authenticated.username, authenticated.email, '','','','','',authenticated.token);
      });
  }

}
