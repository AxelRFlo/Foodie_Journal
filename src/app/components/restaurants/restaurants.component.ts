import { Component, OnInit,EventEmitter, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { YelpService } from '../../services/yelp.service';
import { Subscription } from 'rxjs/Subscription';
import { NgModel } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  @Input() Path;
  @Input() Op;
  @Input() IsFollowed;
  errorMessage: any;
  sub: Subscription;
  location;
  restaurants = {};
  challengeState: string;
  completed: boolean;

  // Consulta
  constructor(private _YelpService: YelpService) { }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.location = position.coords;
        this.sub = this._YelpService.GetYelpList(this.location.latitude, this.location.longitude, this.Path, this.Op).subscribe(data => {
            this.restaurants = data.businesses;
          },
          error => this.errorMessage = <any>error,
          () => {
            this.sub.unsubscribe();
          }
        );
      });
    }
    this.challengeState = this.Path + '/' + this.Op;
    this.checkCompletion();
  }

  checkCompletion() {
    if (this._YelpService.LSGet(this.challengeState) == 'completed'){
      // Se completo
      this.completed = true;
      // no esta completo
    } else {
      this.completed = false;
    }

  }
}
