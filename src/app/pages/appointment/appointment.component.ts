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
  registerForm: any = FormGroup;
  submitted = false;
  bloodGroupType = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
    appointmentType = [
      'Regular Checkup',
      'Follow-up Visit',
      'Telephone Consultations',
    ];

    doc = [];
    department = [
      { departmentName: 'cardiology', doctor: ['john die', 'martine'] },
      {
        departmentName: 'physiotherapy',
        doctor: ['mitchel', 'guptil', 'smith'],
      },
      { departmentName: 'neurology', doctor: ['williumson'] },
    ];
    selectedDepartment: any;
  constructor(
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private auth: AuthService
  ) {}

  ngOnInit() {
    //Add form validations
    this.registerForm = this.formBuilder.group({
      fName: this.formBuilder.control('', [Validators.required]),
      lName: this.formBuilder.control('', [Validators.required]),
      age: this.formBuilder.control('', [Validators.required]),
      bloodGroup: this.formBuilder.control('A+'),
      gender: this.formBuilder.control('male', [Validators.required]),
      phone: this.formBuilder.control('', [Validators.required]),
      date: this.formBuilder.control('', [Validators.required]),
      department:this.formBuilder.control (''),
      doctorName:this.formBuilder.control (''),
      appointmentType: this.formBuilder.control (''),
      canActiveAppointment:this.formBuilder.control(true)
    });

    
  }
  //Add user form actions
  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    this.auth.appointment(this.registerForm.value).subscribe(
      (res) => {
        if (this.registerForm.valid) {
          this.toastr.success(
            'Your appointment booked.We will callback you before appointment.ThankYou.'
          );
          this.registerForm.reset();
        } else {
          this.toastr.warning('Please enter valid data.');
        }
      },
      (err) => {
        this.toastr.warning(err.error.message);
      }
    );
  }
 

  getValue(event) {
    console.log(event.target?.value);
    this.department.forEach((res) => {
      if (res.departmentName === event.target?.value) {
        this.doc = res.doctor;
      }
    });
    // console.log(this.doc);

    // let a = ['abc','bcd']

    // this.registerForm.controls.doctorName.setValue(a);
  }
}
