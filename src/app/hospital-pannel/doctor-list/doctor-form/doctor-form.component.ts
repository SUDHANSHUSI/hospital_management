import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HospitalAuthService } from 'src/app/services/hospital-auth.service';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.css']
})
export class DoctorFormComponent implements OnInit{

  doctorForm:FormGroup
  department:DepartmentDetail[]
  constructor(private toastr:ToastrService,private auth:HospitalAuthService,private dailog:MatDialogRef<DoctorFormComponent>){}

  ngOnInit(): void {
   this.doctorForm=new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    phone:new FormControl('',Validators.required),
    age:new FormControl('',Validators.required),
    department:new FormControl('',Validators.required),
    experience:new FormControl('',Validators.required),
    gender:new FormControl('male',Validators.required),
    isActive:new FormControl(false),
   })

  this.departmentList()
  }

departmentList(){
  this.auth.hospitalList().subscribe((res)=>{
    this.department=res.data;
    // for(let detail of res.data){
    //   this.department.push({_id:detail._id,departmentName:detail.departmentName})
    // }
     console.log(this.department);
   })
}
  onSubmit(){
    if(this.doctorForm.valid){
      console.log();
      this.auth.createDoctor(this.doctorForm.value.department,this.doctorForm.value).subscribe((res)=>{
        this.toastr.success("Your request send successfully.reach admin to live doctor..","Doctor Registration")
        this.dailog.close()
      })
    }else{
      this.toastr.warning("Enter valid data. And try again..","Doctor Registration");
    }
  }
}

interface DepartmentDetail {
  _id: string;
  departmentName: string;
}
