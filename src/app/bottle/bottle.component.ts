import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Bottle } from '../shared/model/bottle';
import { Dealer } from '../shared/model/dealer';
import { Wine } from '../shared/model/wine';
import { Region } from '../shared/model/region';
import { Classification } from '../shared/model/classification';
import { Containing } from '../shared/model/containing';
import { CrudService } from '../shared/services/crud.service';

@Component({
  moduleId: module.id,
  selector: 'app-bottle',
  templateUrl: 'bottle.component.html',
  styleUrls: ['bottle.component.css'],
  providers: [CrudService]
})
export class BottleComponent implements OnInit {

  @Input("item") item: any;
  @Input("template") template: string;

  dealers: Dealer[];
  selectedDealer: Dealer;
  wines: Wine[];
  selectedWine: Wine;
  classifications: Classification[];
  selectedClassification: Classification;
  containings: string[];
  selectedContaining: string;
  crud: CrudService;

  constructor(crud: CrudService) {
    this.crud = crud;
  }

  ngOnInit() {
    this.initFormLists();
  }

  ngOnChanges() {
    let idx = this.getSelected(this.item.dealer, this.dealers);
    if (idx > -1) {
      this.selectedDealer = this.dealers[idx];
    }
    idx = this.getSelected(this.item.wine, this.wines);
    if (idx > -1) {
      this.selectedWine = this.wines[idx];
    }
    idx = this.getSelected(this.item.classification, this.classifications);
    if (idx > -1) {
      this.selectedClassification = this.classifications[idx];
    }
    this.selectedContaining = Containing[this.item.containing];
  }

  initFormLists() {
    this.crud.list('/api/dealers')
    .subscribe(res => {
      this.dealers = res;
      this.ngOnChanges();
    });
    this.crud.list('/api/wines')
    .subscribe(res => {
      this.wines = res;
      this.ngOnChanges();
    });
    this.crud.list('/api/classifications')
    .subscribe(res => {
      this.classifications = res;
      this.ngOnChanges();
    });
    this.containings = Object.keys(Containing).map(k => Containing[k]).filter(v => typeof v === "string");
  }

  update(item: Bottle) {
    item.containing = Containing[this.selectedContaining];
    this.crud.update('/api/bottles', item)
    .subscribe(res => {
      this.ngOnChanges();
    });
  }

  getSelected(item: any, items: any[]): number {
    let index = 0;
    if (items) {
      while (index < items.length) {
        if (items[index].id === item.id) {
          return index;
        }
        index++;
      }
    }
    return -1;
  }

}
