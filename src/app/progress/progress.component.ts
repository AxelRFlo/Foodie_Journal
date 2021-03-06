import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { YelpService } from '../services/yelp.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  @Input() Path;
  @Input() IsFollowed;
  @Output() IsFollowedUpdated = new EventEmitter();
  sub: Subscription;
  Categories;
  currentJourney: string;
  foodType: string;

  foodDescription: string;
  imgUrl: string;
  americanUrl = '../../assets/american.png';
  koreanUrl = '../../assets/korean.png';
  italianUrl = '../../assets/italian.png';
  japaneseUrl = '../../assets/japanese.png';
  mexicanUrl = '../../assets/mexican.png';

  // Progress variables
  completion: number;
  maxChallenges = 6;
  maxItalian = 1;
  completedChallenges: number;
  lsRoute: string;

  constructor(private route: ActivatedRoute, private _YelpService: YelpService) {

   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // Inicializamos el botón
      // Si estoy subscrito a la ruta actual, entonces el botón se inicializa en continue
      // Checo en que ruta estoy actualmente

      // Checo si estoy subscrito, de ser así se inicializa en Continue.
      this.Path = params['id'];
      this.getFoodType();
      this.calculateProgress();
      //Agrega aqui las funciones nuevas
      });
    //this.completion = 72;

  }

    onClick() {
      // Si le hago click y está en follow, comienzo a seguir el path
      if (this.IsFollowed) {

      }
      else{
        // Subscribo en localstorag
        this._YelpService.LSSet('Following', this.Path);
        this.IsFollowed=!this.IsFollowed;
        this.IsFollowedUpdated.emit(this.IsFollowed);
        // Refresco la página para que se muestre el botón
      }
    }

    getNextChallenge() {
        // Reviso cual es el siguiente challenge en la lista

        // Reviso si está en completed o no

        // Si está completed, voy al siguiente en la lista

        // Si no está completed, lo regreso
    }

    challengeVerification() {
      // Reviso si estoy siguiendo algo
    }

    calculateProgress() {
      // Jalo la variable de completed challenges
      console.log('Im trying to access this variable :'  + this.Path);
      console.log('My current completion on this module: ' + this._YelpService.LSGet(this.Path));
      if(this._YelpService.LSGet(this.Path)) {
        console.log('Existe algo.');
        this.completion = parseInt(this._YelpService.LSGet(this.Path));
        console.log('Tipo de completion: ' + typeof(this.completion));
        // Not italian, which has only 1 challenge.
        if(this.Path != 2){
          console.log('Mis challenges completados: ' + this.completion);
          this.completion = this.completion / this.maxChallenges;
          console.log('Resultado de completados / 6: ' + this.completion);
          this.completion = this.completion * 100;
          this.completion = Math.floor(this.completion);

        } else {
          // Italian has only one challenge, thus making this a 100% completion rate
          this.completion = 100;
        }
        

      } else {
        console.log('No hay nada.');
        this.completion = 0;
      }
      // if(this._YelpService.LSGet(this.lsRoute)){
      //   console.log('I found some progress...');
      // this.completedChallenges = this._YelpService.LSGet(this.lsRoute);
      // //Divido completed entre max
      // this.completion = this.completedChallenges / this.maxChallenges;
      // console.log('Resutlado de la division: ' + this.completion);
      // this.completion = this.completion * 100;
      // console.log('Resultado de la mult. por 100' + this.completion);
      // } else {
      //   console.log('No progress found on the variable : ' + this.Path);
      //   this.completion = 0;

      // }
    }

    getFoodType() {
      switch (this.Path) {
        case '0': {
          this.foodType = 'American';
          this.foodDescription = 'One characteristic of American cooking is the'
          + ' fusion of multiple ethnic or regional approaches into completely new cooking styles.';
          this.imgUrl = this.americanUrl;
          this.lsRoute = 'completedAmerican';
          break;
        }
        case '1': {
          this.foodType = 'Korean';
          this.foodDescription = 'Traditional Korean meals are noted for the number of side dishes (banchan)' +
          ' that accompany steam-cooked short-grain rice.';
          this.imgUrl = this.koreanUrl;
          this.lsRoute = 'completedKorean';
          break;
        }
        case '2': {
          this.foodType = 'Italian';
          this.foodDescription = 'Italian cooks rely chiefly on the quality of the ingredients rather than on elaborate preparation.' +
          ' Pasta, vegetables, olive oil and fish are a major part of the Italian cuisine.';
          this.imgUrl = this.italianUrl;
          this.lsRoute = 'completedItalian';
          break;
        }
        case '3': {
          this.foodType = 'Mexican';
          this.foodDescription = 'Mexican cuisine is as complex as other ancient cuisines, It is created mostly with ingredients '
          + 'native to Mexico.';
          this.imgUrl = this.mexicanUrl;
          this.lsRoute = 'completedMexican';
          break;
        }
        case '4': {
          this.foodType = 'Japanese';
          this.foodDescription = 'The traditional cuisine of Japan is based on rice with miso soup and other dishes. '
         + 'there is an emphasis on seasonal ingredients.';
          this.imgUrl = this.japaneseUrl;
          this.lsRoute = 'completedJapense';
          break;
        }
        default: {
          break;
        }
      }
    }


  }
