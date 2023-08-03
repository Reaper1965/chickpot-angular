import { Component } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  username:any;
  phonenumber:any;
  Email:any;
  Address:any;
  alert()
  {
    swal.fire({title:"Your Order has been placed Successfully", icon:"success"});
  }
}
