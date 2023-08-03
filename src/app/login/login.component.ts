import { Component } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private route:Router){}
  username:any;
  password:any;
  cappy:any;
  captcha:any;
  user:any;
i=0;
  dologin(){
    if(this.cappy==this.captcha){
      if(this.password=="@12@12"){
        this.route.navigateByUrl("/user/Home");
        swal.fire({ title: 'Login Success',icon: 'success'});
        
        this.user={
          "username":this.username,
          "password":this.password
        }
        localStorage.setItem('cred',JSON.stringify(this.user))
      }
      else{
        
        swal.fire({
          title: 'WRONG CREDENTIALS',
          icon: 'warning'});
      }
    }
    else{
      swal.fire({
        title: 'Invalid captcha',
        icon: 'warning'});
    }
  }
 ngOnInit(){
  this.cappy="";
  for(this.i=0;this.i<=4;this.i++){
    this.cappy+=Math.round(Math.random()*10);
  }
 }
}