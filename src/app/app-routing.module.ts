import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PopoverComponent } from './popover/popover.component';
import { HomeComponent } from './home/home.component';
import { OptionsComponent } from './options/options.component';
import { ChallengeComponent } from './challenge/challenge.component';


export const routes: Route[] = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {path: 'home', component: HomeComponent},
  {path: 'popover', component: PopoverComponent},
  {path: 'options', component: OptionsComponent},
  {path: 'challenge', component: ChallengeComponent}
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
