import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { SessionService } from '../shared/services/session.service';
import { Bottle } from '../shared/model/bottle';
import { environment } from '../environment';
import { BottleComponent } from '../bottle/bottle.component';
import { ArraySortPipe } from '../shared/pipes/array-sort-pipe.pipe';

@Component({
  moduleId: module.id,
  selector: 'app-bottles',
  templateUrl: 'bottles.component.html',
  styleUrls: ['bottles.component.css'],
  directives: [BottleComponent],
  pipes: [ ArraySortPipe ]
})
export class BottlesComponent implements OnInit {

  http: Http;
  headers: Headers;
  sessionService: SessionService;
  bottles: Bottle[];
  selectedItem: Bottle;

  constructor(http: Http, sessionService: SessionService) {
    this.http = http;
    this.sessionService = sessionService;
    this.selectedItem = null;
  }

  ngOnInit() {
    if (this.sessionService.getCurrentUser()) {
      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/json');
      this.headers.append('X-Requested-With', 'XMLHttpRequest');
      this.headers.append('authorization', 'Bearer ' + this.sessionService.getCurrentUser().token);
      this.headers.append('user-id', this.sessionService.getCurrentUser().id);

      this.http.get( //
        environment.endpoint + '/api/bottles', //
        {headers : this.headers}) //
        .map(response => response.json()) //
        .subscribe(res => {this.bottles = res});
      }
    }

    update(bottle) {
      this.selectedItem = bottle;
    }

    remove() {

    }
  }
