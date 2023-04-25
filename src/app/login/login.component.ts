
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hide = true;
  constructor(private formBuilder: FormBuilder) {
    
  }
  loginForm=new FormGroup({

    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })
  onSubmit(){}
}
