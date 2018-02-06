import { Component, OnInit } from '@angular/core';
import { YelpService } from '../services/yelp.service';

@Component({
  selector: 'app-food-types',
  templateUrl: './food-types.component.html',
  styleUrls: ['./food-types.component.scss']
})
export class FoodTypesComponent implements OnInit {
  Categories;
  constructor(private _YelpService: YelpService) { }

  ngOnInit() {
    this.Categories=this._YelpService.Getcat(0);
    console.log(this.Categories);
  }

}
