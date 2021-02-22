import { Component, OnInit } from '@angular/core';

import { Validators,  FormBuilder } from '@angular/forms';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;

detailsForm = this.fb.group({
username: ['', [Validators.required,Validators.minLength(8),Validators.pattern("[a-z0-9]*")]],
firstname:['', [Validators.required]],
lastname:['', [Validators.required]],
email:['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
phoneno:['',[Validators.required,Validators.pattern('[0-9]{10}')]],

//Validators.pattern("^[0-9]{10}*")
 })



  constructor( private fb: FormBuilder,private detailservice:DetailService) { }
    
  ngOnInit(): void {
    
}
onSubmit() {
  this.submitted = true;
  this.detailservice.displaytable(this.detailsForm.value)
  
   this.detailsForm.reset('')
}
}
