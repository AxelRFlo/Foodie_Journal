import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { PopoverComponent } from './popover/popover.component';
// import { HomeComponent } from './home/home.component';
// import { OptionsComponent } from './options/options.component';


const routes: Routes = [
  // {path: 'home', component: HomeComponent},
  // {path: 'popover', component: PopoverComponent},
  // {path: 'options', component: OptionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
