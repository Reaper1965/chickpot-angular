import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';
import {of} from 'rxjs'
import { foods } from 'src/app/food/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {


  private foodList:foods[]=[
    {
      id:1,
      name: 'Dum Biryani',
      cookTime: '20-40',
      price: 300,
      favourite: false,
      origins: ['Indian'],
      stars: 4.5,
      imageUrl: 'assets/food1.jpeg',
      tags: ['Lunch','Biryani' ],
      isEdit:false

    },
    {
      id:2,
      name: 'EGG Biryani',
      cookTime: '20-30',
      price: 200,
      favourite: false,
      origins: ['Indian'],
      stars: 4.5,
      imageUrl: 'assets/food2.jpeg',
      tags: ['Dinner', 'Biryani'],
      isEdit:false
    },
    {
      id:3,
      name: 'Fried Rice',
      cookTime: '10-15',
      price: 150,
      favourite: false,
      origins: ['Chineese'],
      stars: 4.5,
      imageUrl: 'assets/food3.jpg',
      tags: ['FastFood','Snack', 'Rice'],
      isEdit:false
    },
    {
      id:4,
      name: 'Noodles',
      cookTime: '10-15',
      price: 150,
      favourite: true,
      origins: ['Chineese'],
      stars: 4.5,
      imageUrl: 'assets/food4.jpg',
      tags: ['FastFood','Snack', 'Noodles'],
      isEdit:false
    },
    {
      id:5,
      name: 'Pizza',
      cookTime: '10-20',
      price: 250,
      favourite: false,
      origins: ['American'],
      stars: 4.5,
      imageUrl: 'assets/food5.jpeg',
      tags: ['FastFood','Snack','Pizza' ],
      isEdit:false
    },
    {
      id:6,
      name: 'Shawarma',
      cookTime: '10',
      price: 200,
      favourite: false,
      origins: ['Indian'],
      stars: 4.5,
      imageUrl: 'assets/food6.webp',
      tags: ['FastFood','Snack', 'Shawarma'],
      isEdit:false
    },
    {
      id:7,
      name: 'Prawns Curry',
      cookTime: '20-40',
      price: 300,
      favourite: false,
      origins: ['Indian'],
      stars: 4.5,
      imageUrl: 'assets/food7.jpg',
      tags: ['Lunch','Prawns','Curry' ],
      isEdit:false
    },
    {
      id:8,
      name: 'Apollo Fish',
      cookTime: '30',
      price: 450,
      favourite: false,
      origins: ['Indian'],
      stars: 4.5,
      imageUrl: 'assets/food8.jpg',
      tags: ['Dinner', 'Apollo Fish','Curry' ],
      isEdit:false
    },
    {
      id:9,
      name: 'Paneer Butter Masala',
      cookTime: '30',
      price: 350,
      favourite: false,
      origins: ['Indian'],
      stars: 4.5,
      imageUrl: 'assets/food9.jpeg',
      tags: ['Dinner', 'Paneer','Curry' ],
      isEdit:false
    },
    {
      id:10,
      name: 'Sambar Rice',
      cookTime: '30',
      price: 150,
      favourite: false,
      origins: ['Indian'],
      stars: 4.5,
      imageUrl: 'assets/food10.webp',
      tags: ['Lunch', 'Sambar','Curry' ],
      isEdit:false
    },
    {
      id:11,
      name: 'Country Chicken',
      cookTime: '30',
      price: 400,
      favourite: false,
      origins: ['Indian'],
      stars: 4.5,
      imageUrl: 'assets/food11.jpg',
      tags: ['Lunch', 'Chicken','Curry' ],
      isEdit:false
    },
    {
      id:12,
      name: 'Dal makani',
      cookTime: '30',
      price: 250,
      favourite: false,
      origins: ['Indian'],
      stars: 4.5,
      imageUrl: 'assets/food12.jpg',
      tags: ['Dinner', 'Dal','Curry' ],
      isEdit:false
    },
    {
      id:13,
      name: 'Methi chaman',
      cookTime: '30',
      price: 220,
      favourite: false,
      origins: ['Indian'],
      stars: 4.5,
      imageUrl: 'assets/food13.webp',
      tags: ['Dinner', 'Methi','Curry' ],
      isEdit:false
    },
    {
      id:14,
      name: 'Mutton Nalli Ghosh',
      cookTime: '30',
      price: 500,
      favourite: false,
      origins: ['Indian'],
      stars: 4.5,
      imageUrl: 'assets/food14.avif',
      tags: ['Dinner', 'Mutton','Curry' ],
      isEdit:false
    },
    {
      id:15,
      name: 'Mushroom Pizza',
      cookTime: '30',
      price: 350,
      favourite: false,
      origins: ['Mexican'],
      stars: 4.5,
      imageUrl: 'assets/food15.jpg',
      tags: ['Pizza','Snack' ],
      isEdit:false
    },
    {
      id:16,
      name: 'Charcol Shawarma',
      cookTime: '30',
      price: 200,
      favourite: false,
      origins: ['Indian'],
      stars: 4.5,
      imageUrl: 'assets/food16.jpeg',
      tags: ['Snack', 'Shawarma'],
      isEdit:false
    }
  ]
  isEdit:any;
  constructor() { }
  updateFood(food:any){
    this.foodList.forEach((prod,ind)=>{
      if(prod.id==food.id){
        this.foodList.splice(ind,1,food)
      }
    })
  }
  cart:foods[]=[];
  addtocart(f:any){
    this.cart.push(f);
  }
  deletecart(food:any){
    this.cart.forEach((prod,ind)=>{
      if(prod.id==food.id){
        this.cart.splice(ind,1)
      }
    })
  }
  viewpush(){
    return of (this.cart)
  }
  delete(food:any){
    this.foodList.forEach((prod,ind)=>{
      if(prod.id==food.id){
        this.foodList.splice(ind,1)
      }
    })
  }

  viewFoods(){
    return of (this.foodList);
  }
  addFood(f:any){
    this.foodList.push(f);
  }

  //getAllFoodsByTag(tag:string):Foods[]{
    //return tag=="All"?
    //this.getAll():this.getAll().filter(food=>food.tags?.includes(tag))
  
 
}


