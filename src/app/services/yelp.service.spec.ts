import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpHandler, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { YelpService } from './yelp.service';

describe('YelpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YelpService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([YelpService], (service: YelpService) => {
    expect(service).toBeTruthy();
  }));

  it('Getcat should be an array', inject([YelpService], (service: YelpService) => {
    var test=service.Getcat(0);
    expect(test).toEqual(jasmine.any(Array));
  }));


  it('GetYelpList should be an object', inject([YelpService], (service: YelpService) => {
    var test=service.GetYelpList(25.6927402,-100.3561333,0,0);
    expect(test).toEqual(jasmine.any(Object));
  }));

  it('GetYelpRestaurant should be an object', inject([YelpService], (service: YelpService) => {
    var test=service.GetYelpRestaurant("seúl-monterrey-2");
    expect(test).toEqual(jasmine.any(Object));
  }));
  it('SearchRestaurant should be an object', inject([YelpService], (service: YelpService) => {
    var test=service.SearchRestaurant("seúl-monterrey-2");
    expect(test).toEqual(jasmine.any(Object));
  }));

  it('Getcat should be an string', inject([YelpService], (service: YelpService) => {
    var test=service.Getcat(0);
    expect(test).toEqual(jasmine.any(Array));
  }));
  
});
