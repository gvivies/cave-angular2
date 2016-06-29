import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { BottlesComponent } from './+bottles';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'cave-angular2-app',
  templateUrl: 'cave-angular2.component.html',
  styleUrls: ['cave-angular2.component.css'],
  directives: [HeaderComponent, WelcomeComponent, BottlesComponent, ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  { path: '/bottles', component: BottlesComponent },
  { path: '/', component: WelcomeComponent }
])
export class CaveAngular2AppComponent {

  constructor (router: Router) {
    router.navigate(['/']);
  }
}
