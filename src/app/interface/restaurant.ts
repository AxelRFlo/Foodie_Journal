export interface Restaurant {
    categories: any[];
    coordinates: object;
    display_phone?:String;
    hours?: any[];
    id:String;
    image_url:String;
    is_claimed:boolean;
    is_closed:boolean;
    location:object;
    name:String;
    phone?:String;
    photos?:any[];
    price?:String;
    rating?:number;
    review_count?:number;
    transactions?:any[];
    url:String;
}
