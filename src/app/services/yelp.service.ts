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
    1:{0:{cat:"korean",name:"Korean"},
      1:{cat:"ramen",name:"Ramen"},
      2:{cat:"japacurry",name:"Curry"},
      3:{cat:"unagi",name:"Unagi"},
      4:{cat:"yakitori",name:"Yakitori"},
      5:{cat:"tempura",name:"Tempura"}},
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
    .catch(this.handleError);
  }
  
  GetYelpRestaurant(id){
    if(this.LSGet("restaurant:"+id)){
      return new Promise(resolve=>{
        setTimeout(()=>{
          resolve(this.LSGet("restaurant:"+id));
        },100);
      });
    }
    else{
      var rest:any={};
       
      return new Promise((resolve, reject) => {
        this._yelplist="https://api.yelp.com/v3/businesses/"+id;
        this.http.get(this._yelplist,{ headers: {'Authorization':'Bearer Sqzw1brYWdYWUUJyGZSEMpOrwytiWLBdV2wAfUhIdzShVlKzwXGikTT-3YS1sY_fqxW08or17spgcwvDMcGy4Gw7tDQkHTc-vd37nklLs2_kiISYWJaq8r5MB5dwWnYx' } })
          .toPromise()
          .then(
            res => {
              setTimeout(()=>{
                this.LSSet("restaurant:"+id,res);
                resolve();
              },100);   
            }
          );
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

  Getday(Schedule) {
    if(Object.keys(Schedule).some(key => Schedule[key].day === (this.weekday[new Date().getDay()]))){
      return this.GetTime(Schedule[this.weekday[new Date().getDay()]]["start"])+" - "+this.GetTime(Schedule[this.weekday[new Date().getDay()]]["end"]);
    }
    else{
      return "Not open today"
    }
  }

  GetPathName(Path){
    return this.categories[Path][0]["name"];
  }

  GetTime(Time){
    var hours = Time.slice(0, 2);
    var minutes = Time.slice(2, 4);
    var timeValue;

    if (hours > 0 && hours <= 12)
    {
      timeValue= "" + (hours - 0);
    }
    else if (hours > 12)
    {
      timeValue= "" + (hours - 12);
    }
    else if (hours == 0)
    {
      timeValue= "12";
    }
    
    timeValue += ":" + minutes;
    timeValue += (hours >= 12) ? " P.M." : " A.M.";

    return timeValue;
  }

  
  Getcat(id) {
    const array = [];
    for (let i in this.categories[id]) {
      array.push(i=this.categories[id][i]['name']);
   }
    return array;
  }
  ValidChallengeURL(id,path,challenge){
    var categoryList= this.categories[path][challenge]["cat"].split(',');
    for (let j in categoryList) {
      for (let i in id) {
        if (id[i]['alias'] == categoryList[j]){
          return true;
        }
      }
    }
    return false;
  }
}