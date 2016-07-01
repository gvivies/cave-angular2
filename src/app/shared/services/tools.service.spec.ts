import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ToolsService } from './tools.service';

describe('Tools Service', () => {
  beforeEachProviders(() => [ToolsService]);

  it('should ...',
      inject([ToolsService], (service: ToolsService) => {
    expect(service).toBeTruthy();
  }));
});
