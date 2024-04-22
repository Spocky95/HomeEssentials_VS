import { TestBed } from '@angular/core/testing';

import { ChechoutFormService } from './chechout-form.service';

describe('ChechoutFormService', () => {
  let service: ChechoutFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChechoutFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
