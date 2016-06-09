import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { CaveAngular2AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(CaveAngular2AppComponent);

