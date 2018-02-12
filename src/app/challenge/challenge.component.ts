
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { YelpService } from '../services/yelp.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {
  disableBtn: boolean;
  challengeState = 0;
  buttonText = { 0: 'Mark as Started', 1: 'Mark as Completed', 2: 'Way to go! Take the next challenge' };
  sub:Subscription;
  idRest:string;
  InfoRest:object;
  // Food type
  a;
  // Challenge number
  b;
  next() {
      this.disableBtn = !this.disableBtn;
  }

  constructor(private _router: Router, private route: ActivatedRoute, private _YelpService: YelpService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.idRest = params['id'];
      this.a = params['path'];
      this.b = params['challenge'];

      console.log(this.idRest);
      this.InfoRest = this._YelpService.GetYelpRestaurant(this.idRest);
      console.log(this.InfoRest);
      // Especificamos cual es mi journey actual en LS
      });
  }

  jour(id): void {
    this._router.navigate(['/Journeys/' + this.a]);
  }
}
