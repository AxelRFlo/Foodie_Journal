
import { HomeComponent } from './home.component';
import { DebugElement }    from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Location, CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, inject, async, ComponentFixture } from '@angular/core/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let btnGTS: HTMLElement;
  /*let de:      DebugElement;
  let el:      HTMLElement;
*/

  beforeEach(async(() => {
  fixture = TestBed.createComponent(HomeComponent);
  component = fixture.componentInstance;

  btnGTS = fixture.debugElement.query(By.css('#btnGS')).nativeElement;

  fixture.detectChanges();

    TestBed.configureTestingModule({
      imports: [  CommonModule,
        RouterTestingModule.withRoutes([
         { path: 'options', component: HomeComponent } ])
         ],
      declarations: [ HomeComponent ],
      providers: [  ]
    })
    .compileComponents();
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to url',
    async(inject([Router, Location], (router: Router, location: Location) => {
    fixture.detectChanges();
    btnGTS.click();
    fixture.whenStable().then(() => {
      expect(location.path()).toEqual('/options');
      console.log('after expect');
    });
  })));
});

  /*
  it('should navigate to "/contact" when clicking on link', (inject([Location], (location: Location) => {
    fixture.debugElement.query(By.css('.menu')).children[1].nativeElement.click();
    fixture.detectChanges(); 
    fixture.whenStable().then(() => {
        console.log( location.path() );
      }
*/
