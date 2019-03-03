import { TestBed } from '@angular/core/testing';

import { SynBioHubService } from './syn-bio-hub.service';

describe('SynBioHubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SynBioHubService = TestBed.get(SynBioHubService);
    expect(service).toBeTruthy();
  });
});
