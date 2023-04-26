import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { phoneValidator } from '../shared/phoneValidation';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private toastr: ToastrService,private router:Router,private auth:AuthService) {}
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
   const data=this.registrationForm.value
    this.auth.register(data).subscribe((data)=>{
      if( this.registrationForm.valid ){
        this.toastr.success('Registration successfully.')
        this.registrationForm.reset();
      }else{
        this.toastr.warning('Please enter valid data.')
      }
    },(err)=>{
      this.toastr.warning(err.error.message)
    })
  }

  toLogin(){
    this.router.navigate(['login'])
  }
}
