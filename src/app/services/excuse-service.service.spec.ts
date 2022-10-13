import { TestBed } from '@angular/core/testing';

import { ExcuseServiceService } from './excuse-service.service';

describe('ExcuseServiceService', () => {
  let service: ExcuseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcuseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
