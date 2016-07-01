import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { SessionService } from '../shared/services/session.service';
import { Bottle } from '../shared/model/bottle';
import { environment } from '../environment';
import { BottleComponent } from '../bottle/bottle.component';
import { ArraySortPipe } from '../shared/pipes/array-sort-pipe.pipe';
import { CrudService } from '../shared/services/crud.service';

@Component({
  moduleId: module.id,
  selector: 'app-bottles',
  templateUrl: 'bottles.component.html',
  styleUrls: ['bottles.component.css'],
  directives: [BottleComponent],
  pipes: [ ArraySortPipe ],
  providers: [ CrudService ]
})
export class BottlesComponent implements OnInit {

  http: Http;
  headers: Headers;
  sessionService: SessionService;
  bottles: Bottle[];
  selectedItem: Bottle;
  addMode: boolean;
  crud: CrudService;

  constructor(http: Http, sessionService: SessionService, crud: CrudService) {
    this.http = http;
    this.sessionService = sessionService;
    this.selectedItem = null;
    this.crud = crud;
  }

  ngOnInit() {
    if (this.sessionService.getCurrentUser()) {
      this.refresh();
    }
  }

  update(bottle) {
    this.selectedItem = bottle;
    this.addMode = false;
  }

  create() {
    this.selectedItem = new Bottle();
    this.selectedItem.ownedBy = this.sessionService.getCurrentUser().id;
    this.addMode = true;
  }

  remove(bottle) {
    if (confirm('Voulez-vous vraiment supprimer ces bouteilles ?')) {
      this.crud.remove('/api/bottles', bottle)
        .subscribe((res) => {

        });
    }
  }

  refresh() {
    this.crud.list('/api/bottles')
      .subscribe(res => {this.bottles = res});
  }
}
