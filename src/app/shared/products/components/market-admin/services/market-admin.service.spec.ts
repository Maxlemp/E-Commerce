import { TestBed } from '@angular/core/testing';

import { MarketAdminService } from './market-admin.service';

describe('MarketAdminService', () => {
  let service: MarketAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
