import { Component, Input, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { YelpService } from '../../services/yelp.service';
import { Subscription } from 'rxjs/Subscription';
import { NgModel } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-restaurant-info',
  templateUrl: './restaurant-info.component.html',
  styleUrls: ['./restaurant-info.component.scss']
})
export class RestaurantInfoComponent implements OnInit {
  @Input() restaurant;
  errorMessage: any;
  imgerror="https://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/fe8c0c8725d3/assets/img/default_avatars/business_90_square.png";
  restaurantData;
  dir;
  weekday;
  open;
  close;

  constructor(private _YelpService: YelpService) { }

  ngOnInit() {
    this.weekday=this._YelpService.Getday();
    this.restaurantData=this._YelpService.GetYelpRestaurant(this.restaurant.id);
    console.log(this.restaurantData);
    this.dir = {
      origin: { lat: this.restaurant.coordinates.latitude, lng: this.restaurant.coordinates.longitude },
      destination: { lat: 25.658365, lng: -120.369708}
    }
  }
}
