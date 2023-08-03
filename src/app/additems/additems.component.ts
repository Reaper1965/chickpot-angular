import { Component } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { FoodService} from '../services/food/food.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})
export class AdditemsComponent {
  foodid:any;
  foodname:any;
  foodcooktime:any;
  foodprice:any;
  foodfavourite:any;
  foodorigins:any;
  foodstars:any;
  foodimageUrl:any;
  foodtags:any;
  foodobj:any

  foods:Foods[]=[];
constructor(private fs:FoodService, private route:Router){}
addfood()
{
  this.foodobj={
    id:this.foodid,
    name:this.foodname,
    cooktime:this.foodcooktime,
    price:this.foodprice,
    favourite:this.foodfavourite,
    origins:this.foodorigins,
    stars:this.foodstars,
    imageUrl:this.foodimageUrl,
    tags:this.foodtags
  }
  this.fs.addFood(this.foodobj)
  this.route.navigateByUrl('/user/Food')
}
}
