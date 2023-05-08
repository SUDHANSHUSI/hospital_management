import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-update-popup',
  templateUrl: './update-popup.component.html',
  styleUrls: ['./update-popup.component.css'],
})
export class UpdatePopupComponent implements OnInit {
  updateForm: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      fName: new FormControl(''),
      lName: new FormControl(''),
      age: new FormControl(''),
      bloodGroup: new FormControl(''),
      gender: new FormControl(''),
      phone: new FormControl(''),
      date: new FormControl(''),
      department: new FormControl(''),
      doctorName: new FormControl(''),
      appointmentType: new FormControl(''),
      canActiveAppointment: new FormControl(''),
    });
  }

  myFilter = (d: Date | null): boolean => {
    let day = (d || new Date()).getDay();
    if (d < new Date()) {
      return false;
    }
    return day !== 0 && day !== 6;
  };

  editData: any;

  updatedata() {
    this.auth.updateAppointment(this.data.id).subscribe((res) => {
      this.editData = res;
      this.updateForm.setValue({
        age:this.editData.age,
        appointmentType:this.editData.appointmentType,
        bloodGroup:this.editData.bloodGroup,
        canActiveAppointment:this.editData.canActiveAppointment
      })
    });
  }
}
