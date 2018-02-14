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
import { Restaurant } from '../../interface/restaurant';

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
  restaurantData;
  today="";
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

    const promise=this._YelpService.GetYelpRestaurant(this.restaurant.id);
    promise.then(result =>{
      this.restaurantData=result;
      if(this.restaurantData.hours){
        this.today=this._YelpService.GetTime(this.restaurantData.hours[0]["open"][this._YelpService.Getday()]["start"])+" - "+this._YelpService.GetTime(this.restaurantData.hours[0]["open"][this._YelpService.Getday()]["end"]);
      }
      else{
        this.today='';
      }
    });
   
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

}
