import { Router } from '@angular/router';

import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { YelpService } from '../services/yelp.service';

@Component({
  selector: 'app-journeys',
  templateUrl: './journeys.component.html',
  styleUrls: ['./journeys.component.scss']
})
export class JourneysComponent implements OnInit {
  idJourney: string;
  sub: Subscription;
  Categories;
  CIsComplete=[];
  IsFollowed=false;

  constructor(private _router: Router, private route: ActivatedRoute, private _YelpService: YelpService) { }

  ngOnInit() {
    
    this.sub = this.route.params.subscribe(params => {
      this.idJourney = params['id'];
      this.Categories = this._YelpService.Getcat(this.idJourney);
      this.Categories.forEach((item, index) => {
        this.CIsComplete[index]=this.checkCompletion(this.idJourney + '/' + index, index);
      });
      if(this._YelpService.LSGet('Following') == this.idJourney) {
        // muestro el botón
        this.IsFollowed = true;
      // Especificamos cual es mi journey actual en LS
      }
      else{
        this.IsFollowed = false;
      }
    });

  }

  checkCompletion(Chanllenge,index) {
    if (this._YelpService.LSGet(Chanllenge) == 'completed'){
      // Se completo
      return "../../assets/check_blue.png";
      // no esta completo
    } else {
      return "../../assets/"+(index+1)+".png";
    }
  }

  foodieJo(): void {
    this._router.navigate(['/home']);
  }

  openNav() {
  }

  closeNav() {
  }

  handleIsFollowedUpdated(NewFollow){
    this.IsFollowed=!this.IsFollowed;
    console.log("this.IsFollowed");
    console.log(this.IsFollowed);
  }
}
