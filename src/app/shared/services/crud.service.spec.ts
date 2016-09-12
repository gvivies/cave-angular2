import { addProviders, inject } from '@angular/core/testing';
import { CrudService } from './crud.service';
import { SessionService } from './session.service';
import { MockBackend } from '@angular/http/testing';
import { Http, BaseRequestOptions } from '@angular/http';

describe('Crud Service', () => {
  beforeEach(() => {
    addProviders([CrudService, SessionService, MockBackend, BaseRequestOptions,
    { provide: Http, useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backend, defaultOptions);
        },  deps: [MockBackend, BaseRequestOptions]}]);
  });

  it('should init as well',
      inject([CrudService], (service: CrudService) => {
    expect(service).toBeTruthy();
  }));
});
