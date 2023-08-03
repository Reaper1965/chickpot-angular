import { Component} from '@angular/core';

import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  i:any;k:any;
  j:any;
  
  ngOnInit(){
    this.i=0;
    setInterval(()=>{
     if(this.i<=30)
      this.i++;
    },100)
  
    this.j=0;
    setInterval(()=>{
     if(this.j<=50)
      this.j++;
    },100)
  
    this.k=0;
    setInterval(()=>{
     if(this.k<=23)
      this.k++;
    },100)
  }

}

