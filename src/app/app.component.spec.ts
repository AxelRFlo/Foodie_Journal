import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { auth } from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';


describe('AppComponent', () => {
  let routers: RouterModule;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    MockAuthservice = {};
    MockAngularfireauth = {};
    routers = {};
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: AuthService, useValue: MockAuthService},
        {provide: RouterModule, useValue: routers},
        {provide: AngularFireAuth, useValue: MockAngularfireauth}
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));
  it('should loggin succesfully', () => {
    const checkLogin = component.isLoggedIn();
    expect(checkLogin).toBe(true);
  });
});
