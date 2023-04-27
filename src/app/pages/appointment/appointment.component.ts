import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
// import { DatepickerAdapterComponent } from '../datepicker-adapter/datepicker-adapter.component';
// import { DatepickerAdapterComponent } from '../datepicker-adapter/datepicker-adapter.component';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],

  // imports:[DatepickerAdapterComponent]
})
export class AppointmentComponent {
  // registerForm: any = FormGroup;
  submitted = false;
  constructor(
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private auth: AuthService
  ) {}
  //Add user form actions
  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm.value);
    // stop here if form is invalid
    this.auth.appointment(this.registerForm.value).subscribe(
      (res) => {
        if (this.registerForm.valid) {
          this.toastr.success('Your appointment booked.We will callback you before appointment.ThankYou.');
          this.registerForm.reset();
        } else {
          this.toastr.warning('Please enter valid data.');
        }
      },
      (err) => {
        this.toastr.warning(err.error.message);
      }
    );

    // if (this.registerForm.invalid) {
    //   this.toastr.warning('Enter Valid Data And try again..');
    //   return;
    // }
    //True if all the fields are filled
    // if (this.submitted) {
    //   this.toastr.success('Your responce save successfully..');

    // }
  }
  ngOnInit() {
    //Add form validations
  }
  registerForm = this.formBuilder.group({
    fName: ['', [Validators.required]],
    lName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    date: ['', [Validators.required]],
    message: ['', [Validators.required]],
    gender: ['male', [Validators.required]],
  });
}
