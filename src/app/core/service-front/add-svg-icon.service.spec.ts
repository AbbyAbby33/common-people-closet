import { TestBed } from '@angular/core/testing';

import { AddSvgIconService } from './add-svg-icon.service';

describe('AddSvgIconService', () => {
  let service: AddSvgIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddSvgIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
