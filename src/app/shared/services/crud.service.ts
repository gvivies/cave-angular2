import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from '../model/user';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environment';
import 'rxjs/add/operator/map';
import { SessionService } from './session.service';

@Injectable()
export class CrudService {

  private sessionService: SessionService;
  private http: Http;

  constructor(sessionService: SessionService, http: Http) {
    this.sessionService = sessionService;
    this.http = http;
  }

  getHttpHeaders(): Headers {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With', 'XMLHttpRequest');
    headers.append('authorization', 'Bearer ' + this.sessionService.getCurrentUser().token);
    headers.append('user-id', this.sessionService.getCurrentUser().id);
    return headers;
  }

  list(url: string): Observable<any> {
    return this.http.get( //
      environment.endpoint + url, //
      {headers : this.getHttpHeaders()}) //
      .map(response => response.json());

  }

  update(url: string, item: any) : Observable<any> {
    return this.http.put( //
      environment.endpoint + url, //
      item, //
      {headers : this.getHttpHeaders()}) //
      .map(response => response.json());
  }

}
