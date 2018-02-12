import { Component, Input, OnInit} from '@angular/core';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { YelpService } from '../../services/yelp.service';
import { Subscription } from 'rxjs/Subscription';
import { NgModel } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { Image, Action, ImageModalEvent, Description } from 'angular-modal-gallery';

@Component({
  selector: 'app-restaurant-info',
  templateUrl: './restaurant-info.component.html',
  styleUrls: ['./restaurant-info.component.scss']
})
export class RestaurantInfoComponent implements OnInit{
  @Input() restaurant;
  @Input() Path;
  errorMessage: any;
  imgerror="https://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/fe8c0c8725d3/assets/img/default_avatars/business_90_square.png";
  restaurantData;
  dir;
  weekday;
  open;
  close;
  hidden = true;
  modal=false;
  imagesArray: Array<Image> = [
    new Image(
      'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg',
      null, // no thumb
      null, // no description
      'http://www.google.com'
    ),new Image(
      'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg',
      null, // no thumb
      null, // no description
      'http://www.google.com'
    )]

  constructor(private _YelpService: YelpService) { }

  ngOnInit() {
    this.weekday=this._YelpService.Getday();
    this.restaurantData=this._YelpService.GetYelpRestaurant(this.restaurant.id);
    this.dir = {
      origin: { lat: this.restaurant.coordinates.latitude, lng: this.restaurant.coordinates.longitude },
      destination: { lat: 25.658365, lng: -120.369708}
    }
    this.showButton();
  }

  showButton() {
    // si mi current journey es el que tengo activo
    if(this._YelpService.LSGet('Following') == this.Path) {
      // muestro el botón
      this.hidden = false;
    }
  }
  myFunc(){
    console.log(this.restaurant);
    this.restaurant.id="this";
  }
}
