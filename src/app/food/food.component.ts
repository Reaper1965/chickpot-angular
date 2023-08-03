import { Component } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { FoodService} from '../services/food/food.service';
import { Router } from '@angular/router';
import { foods } from './food';


@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {
  menufoods:foods[]=[];
  Foods:any
  constructor(private fs:FoodService, private route:Router){}
  edit(food:any){
    food.isEdit=true
  }
  delete(food:any){
    this.fs.delete(food)
  }
  update(food:any){
    food.isEdit=false;
    this.fs.updateFood(food)
  }
  cart(food:any){
    this.fs.addtocart(food);
    this.route.navigateByUrl("/user/Cart")
  }

  
  ngOnInit(): void{
    console.log("hello")
    this.fs.viewFoods().subscribe((re)=>{
      this.menufoods=re;
      console.log(this.menufoods)

    })
    // this.router.params.subscribe(params =>{
    //   if(params['searchItem'])
    //   this.foods=this.fs.getAll().filter(food =>food.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
    //   else if(params['tag'])
    //   this.foods=this.fs.getAllFoodsByTag(params['tag'])
    //   else
    //   this.foods=this.fs.getAll()
    // })
  }
}
