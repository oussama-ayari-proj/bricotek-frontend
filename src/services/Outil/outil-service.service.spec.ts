import { TestBed } from '@angular/core/testing';

import { OutilServiceService } from './outil-service.service';

describe('OutilServiceService', () => {
  let service: OutilServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutilServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
