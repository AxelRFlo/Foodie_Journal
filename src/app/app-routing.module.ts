import { NgModule } from '@angular/core';
import { Route, RouterModule, CanActivate } from '@angular/router';
import { PopoverComponent } from './popover/popover.component';
import { HomeComponent } from './home/home.component';
import { OptionsComponent } from './options/options.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { JourneysComponent } from './journeys/journeys.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AuthGuard } from './auth-guard/auth-guard.component';
import { AboutComponent } from './about/about.component';


export const routes: Route[] = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {path: 'home', component: HomeComponent},
  {path: 'popover', component: PopoverComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'options', component: OptionsComponent, canActivate: [AuthGuard]},
  {path: 'challenge/:path/:challenge/:id', component: ChallengeComponent, canActivate: [AuthGuard]},
  {path: 'journeys/:id', component: JourneysComponent},
  {path: 'about', component: AboutComponent}
];


// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
