import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
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
    private auth: AuthService,
    private route:Router
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
    console.log(this.registerForm);
    
    if(this.registerForm.valid){
    this.auth.appointment(this.registerForm.value).subscribe(
      (res) => {
        if (this.registerForm.valid) {
          this.toastr.success(
            'Your appointment booked.We will callback you before appointment.ThankYou.'
          );
          this.registerForm.reset();
          this.route.navigate(['/userProfile'])
          
        } else {
          this.toastr.error('Please enter valid data.');
        }
      },
      (err) => {
        this.toastr.error(err.error.message);
      }
    );
    }else{
      this.toastr.error('Please enter Valid data...');
    }
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
