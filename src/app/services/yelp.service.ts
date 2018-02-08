import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { EventEmitter } from '@angular/core/src/event_emitter';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class YelpService {
  private _yelplist:string;
  private categories={
    0:{0:{cat:"newamerican,tradamerican",name:"Americana"},
      1:{cat:"burgers",name:"Burgers"},
      2:{cat:"hotdogs",name:"Hotdogs"},
      3:{cat:"chicken_wings",name:"Chicken wings"},
      4:{cat:"bbq",name:"BBQ"},
      5:{cat:"sandwiches",name:"Sandwiches"}},
    1:{0:{cat:"korean",name:"korean"},
      1:{cat:"ramen",name:"Ramen"},
      2:{cat:"japacurry",name:"Curry"},
      3:{cat:"unagi",name:"unagi"},
      4:{cat:"yakitori",name:"yakitori"},
      5:{cat:"tempura",name:"tempura"}},
    2:{0:{cat:"italian",name:"Italian"}},
    3:{0:{cat:"mexican",name:"Mexican"},
      1:{cat:"tacos",name:"Tacos"},
      2:{cat:"tamales",name:"Tamales"},
      3:{cat:"northernmexican",name:"Northernmexican"},
      4:{cat:"easternmexican",name:"Easternmexican"},
      5:{cat:"yucatan",name:"Yucatan"}},
    4:{0:{cat:"japanese",name:"Japanese"},
      1:{cat:"ramen",name:"Ramen"},
      2:{cat:"japacurry",name:"Curry"},
      3:{cat:"unagi",name:"Unagi"},
      4:{cat:"yakitori",name:"Yakitori"},
      5:{cat:"tempura",name:"Tempura"}}
  };
  private weekday=[6,0,1,2,3,4,5];
  public loading: BehaviorSubject<boolean>;

  subRes:Subscription;
  constructor(private http:HttpClient){
    this.loading = new BehaviorSubject<boolean>(false);
  }
  
  GetYelpList(lat,long,cat,subcat){
    this._yelplist="https://api.yelp.com/v3/businesses/search?latitude="+lat+"&longitude="+long+"&limit=2&sort_by=distance&categories="+this.categories[cat][subcat]["cat"];
    return this.http.get(this._yelplist,{ headers: {'Authorization':'Bearer Sqzw1brYWdYWUUJyGZSEMpOrwytiWLBdV2wAfUhIdzShVlKzwXGikTT-3YS1sY_fqxW08or17spgcwvDMcGy4Gw7tDQkHTc-vd37nklLs2_kiISYWJaq8r5MB5dwWnYx' } })
    .do(data => console.log(data))
    .catch(this.handleError);
  }
  
  GetYelpRestaurant(id){
    if(this.LSGet("restaurant:"+id)){
      return this.LSGet("restaurant:"+id)
    }
    else{
      this.subRes=this.SearchRestaurant(id).subscribe(data => {
        return data;
      },
      error => <any>error,
      () => {
        console.log(this.subRes);
        this.subRes.unsubscribe();
      });
    }
  }
  
  SearchRestaurant(id){
    this._yelplist="https://api.yelp.com/v3/businesses/"+id;
    return this.http.get(this._yelplist,{ headers: {'Authorization':'Bearer Sqzw1brYWdYWUUJyGZSEMpOrwytiWLBdV2wAfUhIdzShVlKzwXGikTT-3YS1sY_fqxW08or17spgcwvDMcGy4Gw7tDQkHTc-vd37nklLs2_kiISYWJaq8r5MB5dwWnYx' } })
    .do(data => this.LSSet("restaurant:"+id,data))
    .catch(this.handleError);
  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }


  LSGet(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  LSSet(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  Getday() {
    return this.weekday[new Date().getDay()];
  }
  Getcat(id) {
    const array = [];
    for (let i in this.categories[id]) {
      array.push(i=this.categories[id][i]['name']);
   }
    return array;
  }
}