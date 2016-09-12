import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { SessionService } from './session.service';

@Injectable()
export class CrudService {

  constructor(private sessionService: SessionService, private http: Http) {
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
      { headers : this.getHttpHeaders(), body: '' }) // //
      .map(response => response.json());

  }

  update(url: string, item: any): Observable<any> {
    return this.http.put( //
      environment.endpoint + url, //
      item, //
      {headers : this.getHttpHeaders()}) //
      .map(response => response.json());
  }

  create(url: string, item: any): Observable<any> {
    return this.http.post( //
      environment.endpoint + url, //
      item, //
      {headers : this.getHttpHeaders()}) //
      .map(response => response.json());
  }

  remove(url: string, item: any): Observable<any> {
    return this.http.delete( //
      environment.endpoint + url + '/' + item.id, //
      {headers : this.getHttpHeaders()});
  }
}
