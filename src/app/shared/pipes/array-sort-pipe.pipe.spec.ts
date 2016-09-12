import { addProviders, inject } from '@angular/core/testing';
import { ArraySortPipe } from './array-sort-pipe.pipe';

describe('ArraySortPipe Pipe', () => {
  beforeEach(() => {
    addProviders([ArraySortPipe]);
  });

  it('should transform the input', inject([ArraySortPipe], (pipe: ArraySortPipe) => {
      expect(pipe.transform([], '')).toEqual([]);
  }));
});
