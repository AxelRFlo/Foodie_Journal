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

  }
