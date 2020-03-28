import { TestBed, async, inject } from '@angular/core/testing';

import { ResultsGuard } from './results.guard';

describe('ResultsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResultsGuard]
    });
  });

  it('should ...', inject([ResultsGuard], (guard: ResultsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
