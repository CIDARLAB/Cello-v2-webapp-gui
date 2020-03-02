import { TestBed } from '@angular/core/testing';

import { SynbiohubService } from './synbiohub.service';

describe('SynbiohubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SynbiohubService = TestBed.get(SynbiohubService);
    expect(service).toBeTruthy();
  });
});
