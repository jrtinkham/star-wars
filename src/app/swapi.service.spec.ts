import { TestBed, inject } from '@angular/core/testing';

import { SWAPIService } from './swapi.service';

describe('SwapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SWAPIService]
    });
  });

  it('should be created', inject([SWAPIService], (service: SWAPIService) => {
    expect(service).toBeTruthy();
  }));
});
