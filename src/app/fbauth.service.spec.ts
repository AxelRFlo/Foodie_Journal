import { TestBed, inject } from '@angular/core/testing';

import { FbauthService } from './fbauth.service';

describe('FbauthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FbauthService]
    });
  });

  it('should be created', inject([FbauthService], (service: FbauthService) => {
    expect(service).toBeTruthy();
  }));
});
