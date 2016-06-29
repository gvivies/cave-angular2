import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CaveAngular2AppComponent } from '../app/cave-angular2.component';

beforeEachProviders(() => [CaveAngular2AppComponent]);

describe('App: CaveAngular2', () => {
  it('should create the app',
      inject([CaveAngular2AppComponent], (app: CaveAngular2AppComponent) => {
    expect(app).toBeTruthy();
  }));
});
