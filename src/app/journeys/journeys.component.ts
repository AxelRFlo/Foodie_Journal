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


  constructor(private _router: Router, private route: ActivatedRoute, private _YelpService: YelpService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.idJourney = params['id'];
      this.Categories = this._YelpService.Getcat(this.idJourney);
      console.log(this.Categories);
      // Especificamos cual es mi journey actual en LS
      });
  }

  foodieJo(): void {
    this._router.navigate(['/home']);
  }

  openNav() {
  }

  closeNav() {
  }



}
