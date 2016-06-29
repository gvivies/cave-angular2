import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';
import { ArraySortPipe } from './array-sort-pipe.pipe';

describe('ArraySortPipe Pipe', () => {
  beforeEachProviders(() => [ArraySortPipe]);

  it('should transform the input', inject([ArraySortPipe], (pipe: ArraySortPipe) => {
      expect(pipe.transform([],"")).toBe(null);
  }));
});
