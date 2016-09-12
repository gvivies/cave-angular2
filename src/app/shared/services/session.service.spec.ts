import { addProviders, inject } from '@angular/core/testing';
import { SessionService } from './session.service';

describe('Session Service', () => {
  beforeEach(() => {
    addProviders([SessionService]);
  });

  it('should ...',
      inject([SessionService], (service: SessionService) => {
    expect(service).toBeTruthy();
  }));
});
