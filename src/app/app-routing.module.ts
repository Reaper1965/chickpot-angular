import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { FoodComponent } from './food/food.component';
import { AdditemsComponent } from './additems/additems.component';
import { CartComponent } from './cart/cart.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"", component:LoginComponent},
  {path:"Checkout",component:FormComponent},
  {path:"Home",component:NavbarComponent},
  {
    path:"user",
    component:NavbarComponent,
    children:[   
      {path:"Home",component:HomeComponent}, 
  {path:"",component:NavbarComponent},
  {path:"search/:searchItem",component:SearchComponent},
  {path:"tag/:tag",component:TagsComponent},
  {path:"Food", component:FoodComponent},
  {path:"Additems",component:AdditemsComponent},
  {path:"Cart",component:CartComponent},

]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
