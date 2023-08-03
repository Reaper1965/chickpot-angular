import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user:any;
  username:any

  constructor(private route:Router){}
  signout()
  {
    if(localStorage.getItem('cred')!=null)
    {
      localStorage.removeItem('cred')
      this.route.navigateByUrl("/login")
    }
    else
    {
      this.route.navigateByUrl("/login")
    }
  }
  
  ngOnInit()
  {
    if(localStorage.getItem('cred')!=null)
    {
      this.user=localStorage.getItem('cred')
      this.user=JSON.parse(this.user);
      this.username=this.user.username
    }
    else
    {
      this.route.navigateByUrl("/login")
    }
  }


}
