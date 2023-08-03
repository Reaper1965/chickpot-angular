import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  Foods:any;
  constructor(private fs:FoodService,private route:Router){}
  del(food:any){
    this.fs.deletecart(food);
  }
  check(){
    this.route.navigateByUrl('/Checkout')
    
  }
  ngOnInit(){
    this.fs.viewpush().subscribe((res)=>{
      this.Foods=res;
    })
  }
}
