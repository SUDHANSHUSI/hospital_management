import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { phoneValidator } from '../shared/phoneValidation';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private toastr: ToastrService,private router:Router) {}
  hide = true;
  hide1=true;
  ngOnInit(): void {
    
  }

  registrationForm=new FormGroup({
    firstName:new FormControl('',Validators.required),
    lastName:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required, Validators.email]),
    phoneNum:new FormControl('',[Validators.required, phoneValidator()]),
    address:new FormControl('',Validators.required),
    pincode:new FormControl('',Validators.required),
    gender:new FormControl('male'),
    password:new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+~`\-={}[\]\\|:;"'<>,.?/])\S{8,}$/)]),
    confirmPassword:new FormControl('',Validators.required),
  })

  proceedregister() {
    console.log(this.registrationForm)
    if (this.registrationForm.valid) {
      // this.service.RegisterUser(this.registrationForm.value).subscribe(result => {
      // });
      this.toastr.success('Please contact admin for enable access.','Registered successfully')
      // this.router.navigate(['login'])
    } else {
      this.toastr.warning('Please enter valid data.')
    }
  }

  toLogin(){
    this.router.navigate(['login'])
  }
}
