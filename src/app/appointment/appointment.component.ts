import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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
    private formBuilder: FormBuilder
  ) {}
  //Add user form actions
  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    console.log(this.registerForm.controls.fname.value,this.registerForm.controls.lname.value,this.registerForm.controls.email.value,this.registerForm.controls.phone.value,this.registerForm.controls.date.value,this.registerForm.controls.message.value);
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.toastr.warning('Enter Valid Data And try again..');
      return;
    }
    //True if all the fields are filled
    if (this.submitted) {
      this.toastr.success('Your responce save successfully..');
      this.registerForm.reset();
    }
  }
  ngOnInit() {
    //Add form validations
  }
  registerForm = this.formBuilder.group({
    fname: ['', [Validators.required]],
    lname: ['', [Validators.required]],
    email: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    date: ['', [Validators.required]],
    message: ['', [Validators.required]],
  });
}
