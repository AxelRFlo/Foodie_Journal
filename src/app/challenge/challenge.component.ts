
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { YelpService } from '../services/yelp.service';
import { Subscription } from 'rxjs/Subscription';
import { Restaurant } from '../interface/restaurant';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {
  disableBtn: boolean;
  challengeState;
  challengeState2;
  buttonText = { 0: 'Mark as Started', 1: 'Mark as Completed', 2: 'Way to go! Take the next challenge' };
  sub: Subscription;
  // id restaurante
  idRest: string;
  InfoRest: Restaurant;
  path: any;
  challenge: any;
  savePath: string;
  lsChallengeState: string;
  next() {
      this.disableBtn = !this.disableBtn;
  }

  constructor(private _router: Router, private route: ActivatedRoute, private _YelpService: YelpService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.idRest = params['id'];
      this.path = params['path'];
      this.challenge = params['challenge'];
      this.savePath = this.path + '/' + this.challenge;
      this.lsChallengeState = this.savePath + '/state';      
      console.log('Savepath: ' + this.savePath);
      console.log('Challengestate: ' + this.lsChallengeState);
      if (this._YelpService.LSGet(this.lsChallengeState)) {
        console.log('yes');
      } else {
        this.challengeState = 0;
        this._YelpService.LSSet(this.lsChallengeState, 0);
        console.log('Setting challenge state to: ' + this.challengeState);
      }

      this.challengeState = this._YelpService.LSGet(this.lsChallengeState);

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
  // Compruebo el challenge state en localstorage y en local.
  console.log('Challenge state en LS: ' + this._YelpService.LSGet(this.lsChallengeState));
  console.log('Challenge state local: ' + this.challengeState);

  // Si mi challenge state es 0 lo seteamos a 1

  if(this._YelpService.LSGet(this.lsChallengeState) == 0){
    console.log('Challenge state en LS es 0: ');
    // this.challengeState = 1;
    this._YelpService.LSSet(this.lsChallengeState, 1);
    console.log('Meti esto a LS: ' + this._YelpService.LSGet(this.lsChallengeState));

  } else {
    // Si es 1, lo seteamos a 2
    if (this._YelpService.LSGet(this.lsChallengeState) == 1) {
      console.log('Challenge state en LS es 1: ');
      // this.challengeState = 2;
      this._YelpService.LSSet(this.lsChallengeState, 2);
      console.log('Meti esto a LS: ' + this._YelpService.LSGet(this.lsChallengeState));

      // logica de challenges
      if (this._YelpService.LSGet(this.savePath)) {
        console.log('Este challenge ya se ha completado.'); 
      } else {
         console.log('Este challenge no se ha completado aun.');
        // Verifico si tengo progreso en este foodtype
      if (this._YelpService.LSGet(this.path)) {
        const completion = this._YelpService.LSGet(this.path);
         console.log('completion de este foodtype: ' + completion);
         let completion2 = parseInt(completion);
         console.log('Completion parseada: ' + completion2);
        completion2 = completion2 + 1;
         console.log('Resultado de la suma' + completion2);
        // We update the foodtype completed challenges
        this._YelpService.LSSet(this.path, completion2);
        // We mark this challenge as completed
        this._YelpService.LSSet(this.savePath, 'completed');
      } else {
        // Si no existe progreso en este challenge
        this._YelpService.LSSet(this.path, 1);
        console.log('Wrote this' + this._YelpService.LSGet(this.path));
        // We mark this challenge as completed
        this._YelpService.LSSet(savePath, 'completed');
      }
  
    }


    }

  }

// Cambiar las variables de estefy para que me jalen lo de local storage
  console.log('Challenge state: ' + this.challengeState);
  this.challengeState = this._YelpService.LSGet(this.lsChallengeState);




}





  completeChallenge2() {
    // Si nunca le he dado click

    // Checo si este challenge ya se grabó
    // si no, pongo que ya se hizo etc.
    // Si existe la variable, saco el valor, lo paso a number 
    console.log('Tipo de comida...: ' + this.path);
    console.log('Id del challenge es... ' + this.challenge);
    console.log('CHALLENGE STATE EN LOCAL STORAGE: ' + this._YelpService.LSGet(this.lsChallengeState));

    // Si tengo algo guardado 1, 2
    if(this._YelpService.LSGet(this.lsChallengeState)) {
      if (this._YelpService.LSGet(this.lsChallengeState) == 0){
        // Si es cero lo cambiamos a 1
        this.challengeState = 1;
        this._YelpService.LSSet(this.lsChallengeState, this.challengeState);
        console.log('Guarde esto en localstorage' + this.challengeState);
      } else { 
        // Si es 1 lo cambiamos a 2
        if (this._YelpService.LSGet(this.lsChallengeState) == 1)){
          this.challengeState = 2;
          this._YelpService.LSSet(this.lsChallengeState, 2);
        }
      }
      console.log('Mi save path: ' + this.savePath);
     if (this._YelpService.LSGet(this.savePath)) {
      console.log('Este challenge ya se ha completado.');

    } else {
       console.log('Este challenge no se ha completado aun.');
      // Verifico si tengo progreso en este foodtype
    if (this._YelpService.LSGet(this.path)) {
      let completion = this._YelpService.LSGet(this.path);
       console.log('completion de este foodtype: ' + completion);
       let completion2 = parseInt(completion);
       console.log('Completion parseada: ' + completion2);
      completion2 = completion2 + 1;
       console.log('Resultado de la suma' + completion2);
      // We update the foodtype completed challenges
      this._YelpService.LSSet(this.path, completion2);
      // We mark this challenge as completed
      this._YelpService.LSSet(this.savePath, 'completed');
    } else {
      // Si no existe progreso en este challenge
      this._YelpService.LSSet(this.path, 1);
      console.log('Wrote this' + this._YelpService.LSGet(this.path));
      // We mark this challenge as completed
      this._YelpService.LSSet(savePath, 'completed');
    }

  }

     console.log("Finished function.");
     console.log('Mi estado del challenge en localstorage es: ' + this._YelpService.LSGet(lsChallengeState))

    // Le agrego uno, y lo guardo en this.path en local storage
  }
}
