import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-update-popup',
  templateUrl: './update-popup.component.html',
  styleUrls: ['./update-popup.component.css']
})
export class UpdatePopupComponent implements OnInit {

  
  updateForm:FormGroup
 constructor( @Inject(MAT_DIALOG_DATA)public data: any,
 private auth: AuthService) {}


  ngOnInit(): void {
    this.updateForm=new FormGroup({
      
      date: new FormControl(''),
      canActiveAppointment:new FormControl('')
    })
  }

  myFilter = (d: Date | null): boolean => {
    let day = (d || new Date()).getDay();
    if(d < new Date()){
      return false
    }
    return day !== 0 && day !== 6;
  };
 
  editData: any;

  updatedata() {
    console.log(this.updateForm.value)
    this.auth.updateAppointment(this.data.id,this.updateForm.value).subscribe((res) => {
      // this.editData = res;
      // this.updateForm.setValue({
      //   canActiveAppointment:this.editData.canActiveAppointment,
      //   date:this.editData.date,
        
      // })
    });
  }
}
