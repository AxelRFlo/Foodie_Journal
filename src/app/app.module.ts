import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FbauthComponent } from './fbauth/fbauth.component';
import { AuthService } from './auth.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopoverComponent } from './popover/popover.component';
import { PopoverModule } from 'ng2-popover';

import { HomeComponent } from './home/home.component';
import { NavpathsComponent } from './navpaths/navpaths.component';



export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDw3sAs11qfTCaXyfZlJj6RwqFaaqoKKYU',
    authDomain: 'foodie-webapp-861c9.firebaseapp.com',
    databaseURL: 'https://foodie-webapp-861c9.firebaseio.com',
    projectId: 'foodie-webapp-861c9',
    storageBucket: '',
    messagingSenderId: '169349660577'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    FbauthComponent,
    PopoverComponent,
    HomeComponent,
    NavpathsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    NgbModule.forRoot(),
    PopoverModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
