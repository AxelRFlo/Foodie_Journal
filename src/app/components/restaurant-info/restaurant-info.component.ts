import { Component, Input, OnInit} from '@angular/core';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { YelpService } from '../../services/yelp.service';
import { Subscription } from 'rxjs/Subscription';
import { NgModel } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { Image, Action, ImageModalEvent, Description } from 'angular-modal-gallery';
import { Router } from '@angular/router';
import { Restaurant } from "../../interface/restaurant";

@Component({
  selector: 'app-restaurant-info',
  templateUrl: './restaurant-info.component.html',
  styleUrls: ['./restaurant-info.component.scss']
})
export class RestaurantInfoComponent implements OnInit{
  @Input() restaurant;
  @Input() Op;
  @Input() Path;
  @Input() IsFollowed;
  errorMessage: any;
  imgerror="https://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/fe8c0c8725d3/assets/img/default_avatars/business_90_square.png";
  restaurantData: Restaurant;
  dir;
  today;
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

  constructor(private _router: Router, private _YelpService: YelpService) { }

  ngOnInit() {
    this.restaurantData=this._YelpService.GetYelpRestaurant(this.restaurant.id);
    if(this.restaurantData.hours){
      this.today=
        this.GetTime(this.today=this.restaurantData.hours[0]["open"][this._YelpService.Getday()]["start"])
        +" - "+
        this.GetTime(this.today=this.restaurantData.hours[0]["open"][this._YelpService.Getday()]["end"]);
    }
    else{
      this.today='';
    }
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
  Gochallenge(): void {
    // alert('cambio de pantalla');
    this._router.navigate(['/challenge/'+this.Path+'/'+this.Op+'/'+this.restaurant.id]);
  }
  GetTime(Time){
    var hours = Time.slice(0, 2);
    var minutes = Time.slice(2, 4);
    console.log("Time "+Time);
    console.log("hours "+hours);
    console.log("minutes "+minutes);
    var timeValue;

    if (hours > 0 && hours <= 12)
    {
      timeValue= "" + (hours - 0);
    }
    else if (hours > 12)
    {
      timeValue= "" + (hours - 12);
    }
    else if (hours == 0)
    {
      timeValue= "12";
    }
    
    timeValue += ":" + minutes;
    timeValue += (hours >= 12) ? " P.M." : " A.M.";

    return timeValue;
  }
}
