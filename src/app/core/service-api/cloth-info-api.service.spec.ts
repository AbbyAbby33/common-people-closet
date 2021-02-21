import { TestBed } from '@angular/core/testing';

import { ClothInfoApiService } from './cloth-info-api.service';

describe('ClothInfoApiService', () => {
  let service: ClothInfoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClothInfoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
