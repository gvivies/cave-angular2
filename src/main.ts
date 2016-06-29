import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { CaveAngular2AppComponent, environment } from './app/';
import { HTTP_PROVIDERS} from '@angular/http';
import { SessionService } from './app/shared/services/session.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(CaveAngular2AppComponent,[HTTP_PROVIDERS, SessionService]);
