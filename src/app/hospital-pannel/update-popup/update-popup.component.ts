import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-popup',
  templateUrl: './update-popup.component.html',
  styleUrls: ['./update-popup.component.css']
})
export class UpdatePopupComponent implements OnInit {

  
  updateForm:FormGroup
 constructor() {}

  ngOnInit(): void {
    this.updateForm=new FormGroup({
      fName: new FormControl(''),
      lName: new FormControl(''),
      age: new FormControl(''),
      bloodGroup: new FormControl(''),
      gender: new FormControl(''),
      phone: new FormControl(''),
      date: new FormControl('',[Validators.required]),
      department:new FormControl (''),
      doctorName:new FormControl (''),
      appointmentType: new FormControl (''),
      canActiveAppointment:new FormControl('',[Validators.required])
    })
  }

  myFilter = (d: Date | null): boolean => {
    let day = (d || new Date()).getDay();
    if(d < new Date()){
      return false
    }
    return day !== 0 && day !== 6;
  };
 
  updatedata(){

  }
}
