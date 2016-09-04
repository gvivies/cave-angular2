import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { SessionService } from '../shared/services/session.service';
import { Bottle } from '../shared/model/bottle';
import { environment } from '../environments/environment';
import { BottleComponent } from '../bottle/bottle.component';
import { ArraySortPipe } from '../shared/pipes/array-sort-pipe.pipe';
import { CrudService } from '../shared/services/crud.service';
import { ToolsService } from '../shared/services/tools.service';

@Component({
  selector: 'app-bottles',
  templateUrl: 'bottles.component.html',
  styleUrls: ['bottles.component.css'],
  directives: [BottleComponent],
  pipes: [ ArraySortPipe ] //,
  //providers: [ CrudService, ToolsService ]
})
export class BottlesComponent implements OnInit {

  headers: Headers;
  sessionService: SessionService;
  bottles: Bottle[];
  selectedItem: Bottle;
  addMode: boolean;
  crud: CrudService;
  tools: ToolsService;

  constructor(private http: Http, sessionService: SessionService, crud: CrudService, tools: ToolsService) {
    this.sessionService = sessionService;
    this.selectedItem = null;
    this.crud = crud;
    this.tools = tools;
  }

  ngOnInit() {
    if (this.sessionService.getCurrentUser()) {
      this.refresh();
    }
  }

  update(bottle) {
    this.selectedItem = this.tools.clone(bottle);
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
          let idx = this.bottles.indexOf(bottle);
          this.bottles.splice(idx, 1);
        });
    }
  }

  refresh() {
    this.crud.list('/api/bottles')
      .subscribe(res => {this.bottles = res});
  }

  onSavedBottle($event) {
    if (this.addMode) {
      this.bottles.push($event.value);
    } else {
      this.selectedItem = $event.value;
    }
  }

  drinkOne(bottle) {
    if (confirm('Voulez-vous vraiment boire une bouteille ?')) {
      this.crud.update('/api/bottles/drink', bottle)
        .subscribe((res) => {
          bottle.quantity = res.quantity;
        });
    }
  }

}
