import { TestBed } from '@angular/core/testing';

import { NavApiService } from './nav-api.service';

describe('NavService', () => {
  let service: NavApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
