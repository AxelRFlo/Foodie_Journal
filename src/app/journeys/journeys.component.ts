import { Router } from '@angular/router';

import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-journeys',
  templateUrl: './journeys.component.html',
  styleUrls: ['./journeys.component.scss']
})
export class JourneysComponent implements OnInit, OnDestroy{
  idJourney: string;
  sub:Subscription;

  constructor(private _router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.idJourney = params['id']; // (+) converts string 'id' to a number
      console.log(this.idJourney);
      });
    
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  foodieJo(): void {
    this._router.navigate(['/home']);
  }

  openNav() {
  }

  closeNav() {
  }

}
