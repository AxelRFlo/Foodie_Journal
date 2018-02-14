// import { Location } from '@angular/common';
// import { TestBed, fakeAsync, tick } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { RouterModule } from '@angular/router';
// import { PopoverComponent } from '../popover/popover.component';
// import { HomeComponent } from './home.component';
// import { routes } from '../app-routing.module';

// describe('Router: App', () => {
//   let location: Location;
//   let routers: RouterModule;
//   let fixture;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [RouterTestingModule.withRoutes(routes)],
//       declarations: [ HomeComponent, routes],
//       providers: [
//         {provide: RouterModule, useValue: routers}
//       ],

//     });
//     routers = TestBed.get(RouterModule);
//     location = TestBed.get(Location);

//     fixture = TestBed.createComponent(HomeComponent);
//     routers.initialNavigation();
//   });

//   it('navigate to "" redirects you to /home', fakeAsync(() => {
//     routers.navigate(['']);
//     tick();
//     expect(location.path()).toBe('/home');
//   }));
// });
