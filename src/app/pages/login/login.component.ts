import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private toastr: ToastrService,
    private router:Router
  ) {}
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  onSubmit() {
    const data = this.loginForm.value;
    this.auth.login(data).subscribe(
      (data) => {
        console.log(data);
        if (data.success) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('role', data.role);
          this.toastr.success('logIn successfully....');
          this.router.navigate(['/appointment']);
        } else {
          this.toastr.warning(data.message);
        }
      },
      (e) => {
        this.toastr.warning(e.error.message);
      }
    );
  }
}
