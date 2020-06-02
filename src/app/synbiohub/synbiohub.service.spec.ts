import { TestBed } from '@angular/core/testing';
import { SynBioHubService } from './synbiohub.service';

describe('SynBioHubService', () => {
  let service: SynBioHubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SynBioHubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
