import { TestBed } from '@angular/core/testing';

import { UserOperateInfoService } from './user-operate-info.service';

describe('UserOperateInfoService', () => {
  let service: UserOperateInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserOperateInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
