import { Component, OnInit, Input} from '@angular/core';
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
  sub: Subscription;
  Categories;
  currentJourney: string;
  button = 'Follow';
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
    this.sub = this.route.params.subscribe(params => {
      // Inicializamos el botón
      // Si estoy subscrito a la ruta actual, entonces el botón se inicializa en continue
      // Checo en que ruta estoy actualmente
            // Checo si estoy subscrito, de ser así se inicializa en Continue.
      if (this._YelpService.LSGet('Following') === this.Path) {
        this.button = 'Continue';
      }
      });
    this.sub.unsubscribe();
    this.getFoodType();

  }

    onClick() {
      // Si le hago click y está en follow, comienzo a seguir el path
      if (this.button === 'Follow') {
        // Subscribo en localstorag
        this._YelpService.LSSet('Following', this.Path);
        // Cambio el botón
        this.button = 'Continue';
        // Refresco la página para que se muestre el botón
        location.reload();
       }

      // Si está en continue, entonces lo mando a la vista del siguiente challenge sin cumplir
      if (this.button === 'Continue') {

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

    calculateProgress(){
      //Jalo la variable de completed challenges
      this.completedChallenges = this._YelpService.LSGet(this.lsRoute);

      //Divido completed entre max

      //Convierto a porcentage

      //Igualo con completion
    }

    getFoodType() {
      console.log('Entre a la funcion');
      console.log(this.Path);
      switch (this.Path) {
        case '0': {
          console.log('Case 0');
          this.foodType = 'American';
          this.foodDescription = 'One characteristic of American cooking is the'
          + ' fusion of multiple ethnic or regional approaches into completely new cooking styles.';
          this.imgUrl = this.americanUrl;
          this.lsRoute = 'completedAmerican';
          console.log('Food type: ' + this.foodType);
          console.log('Food description: ' + this.foodDescription);
          console.log('Image url: ' + this.imgUrl);
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
          console.log('Path checking error.');
          break;
        }
      }

      console.log('The current food type is: ' + this.foodType);
    }


  }
