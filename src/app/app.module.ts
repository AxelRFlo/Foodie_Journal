import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FbauthComponent } from './fbauth/fbauth.component';
import { AuthService } from './auth.service';
import { YelpService } from './services/yelp.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopoverComponent } from './popover/popover.component';
import { PopoverModule } from 'ng2-popover';

import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule} from '@agm/core';
//import { AgmDirectionModule } from 'agm-direction';

import { HomeComponent } from './home/home.component';
import { FoodTypesComponent } from './food-types/food-types.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantInfoComponent } from './components/restaurant-info/restaurant-info.component';
import { HttpClientModule } from '@angular/common/http';


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
    FoodTypesComponent,
    RestaurantsComponent,
    RestaurantInfoComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    NgbModule.forRoot(),
    PopoverModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBfPvEs2RHVe0y_P9bbaBBL7oXfvbPRZs8'
    }),
    //AgmDirectionModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [AuthService,YelpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
