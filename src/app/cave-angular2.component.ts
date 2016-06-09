import { Component } from '@angular/core';
import { BottlesComponent } from './bottles/bottles.component';
import { HeaderComponent } from './header/header.component';

@Component({
  moduleId: module.id,
  selector: 'cave-angular2-app',
  templateUrl: 'cave-angular2.component.html',
  styleUrls: ['cave-angular2.component.css'],
  directives: [BottlesComponent, HeaderComponent]
})
export class CaveAngular2AppComponent {
  title = 'cave-angular2 works!';
}
