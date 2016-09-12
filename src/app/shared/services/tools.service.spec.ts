import { addProviders, inject } from '@angular/core/testing';
import { ToolsService } from './tools.service';

describe('Tools Service', () => {
  beforeEach(() => {
    addProviders([ToolsService]);
  });

  it('should ...',
      inject([ToolsService], (service: ToolsService) => {
    expect(service).toBeTruthy();
  }));
});
