import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { analyzeFile } from '@angular/compiler';


//let af: AngularFireAuth;
//let _router: Router;

let servicioR = '{"hola": "adios"}';

describe('Service: AuthService', () => {
  //let service=  new AuthService (af, _router);
/* 
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, AngularFireAuth],
      imports: [ ]
    });
    service = TestBed.get(AuthService);
  }); */

  it ('should be different :)', () => {
    expect('{"adios": "hola"}').not.toBe(servicioR);
  });

  // it('should be created', () => {
  //   expect(service).toBeNull();
  //  //expect ("hola").toBe("hola");
  // });
});