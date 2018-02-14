import {Location} from "@angular/common";
import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";

import {PopoverComponent} from "../popover/popover.component"
import { HomeComponent } from "./home.component";
import { routes } from "../app-routing.module";
let location: Location;

let router: Router;
let fixture;

describe('Router: App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [ HomeComponent, routes]
      
    });
    router = TestBed.get(Router); 
    location = TestBed.get(Location); 

    fixture = TestBed.createComponent(HomeComponent); 
    router.initialNavigation();
  });

  it('navigate to "" redirects you to /home', fakeAsync(() => { 
    router.navigate(['']); 
    tick(); 
    expect(location.path()).toBe('/home'); 
  }));
});