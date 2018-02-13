import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { YelpService } from './yelp.service';

describe('YelpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YelpService, HttpClient]
    });
  });

  it('should be created', inject([YelpService], (service: YelpService) => {
    expect(service).toBeTruthy();
  }));
});
