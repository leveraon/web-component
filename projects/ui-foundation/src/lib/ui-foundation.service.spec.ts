import { TestBed } from '@angular/core/testing';

import { UiFoundationService } from './ui-foundation.service';

describe('UiFoundationService', () => {
  let service: UiFoundationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiFoundationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
