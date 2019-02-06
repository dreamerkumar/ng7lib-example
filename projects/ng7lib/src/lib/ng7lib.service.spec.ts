import { TestBed } from '@angular/core/testing';

import { Ng7libService } from './ng7lib.service';

describe('Ng7libService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ng7libService = TestBed.get(Ng7libService);
    expect(service).toBeTruthy();
  });
});
