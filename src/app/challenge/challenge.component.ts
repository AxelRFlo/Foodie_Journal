
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { YelpService } from '../services/yelp.service';
import { Subscription } from 'rxjs/Subscription';
import { Restaurant } from "../interface/restaurant";

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
  // id restaurante
  idRest:string;
  InfoRest:Restaurant;
  path;
  challenge;
  next() {
      this.disableBtn = !this.disableBtn;
  }

  constructor(private _router: Router, private route: ActivatedRoute, private _YelpService: YelpService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.idRest = params['id'];
      this.path = params['path'];
      this.challenge = params['challenge'];

      console.log(this.idRest);

      this.InfoRest = this._YelpService.GetYelpRestaurant(this.idRest);
      //
      if(!this._YelpService.ValidChallengeURL(this.InfoRest.categories,this.path,this.challenge)){
        this._router.navigate(['/home']);
      }

      console.log(this.InfoRest);
      

      console.log(this.InfoRest.hours[0]["open"]);
      // Especificamos cual es mi journey actual en LS
      });
  }

  jour(): void {
    this._router.navigate(['/journeys/' + this.path]);
  }

  completeChallenge() {
    // Checo si este challenge ya se grabó
    // si no, pongo que ya se hizo etc.
    // Si existe la variable, saco el valor, lo paso a number 
    console.log('Tipo de comida...: ' + this.path);
    console.log('Id del challenge es... ' + this.challenge);
    let savePath = this.path + '/' + this.challenge;
    console.log('Mi save path: ' + savePath);
    if (this._YelpService.LSGet(this.path)) {
      let completion = this._YelpService.LSGet(this.path);
      console.log('completion: ' + completion);
      let completion2 = parseInt(completion);
      console.log('Completion parseada: ' + completion2);
      completion2 = completion2 + 1;
      console.log('Resultado de la suma' + completion2);
      this._YelpService.LSSet(this.path, completion2);

    } else {
      // Si no existe la variable escribo un 1
      this._YelpService.LSSet(this.path, 1);
      console.log("Wrote this " + this._YelpService.LSGet(this.path))
    }
    console.log("Finished function.");

    // Le agrego uno, y lo guardo en this.path en local storage
  }
}
