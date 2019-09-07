import { TestBed } from '@angular/core/testing';

import { ShowandhideService } from './showandhide.service';

describe('ShowandhideService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowandhideService = TestBed.get(ShowandhideService);
    expect(service).toBeTruthy();
  });
});
