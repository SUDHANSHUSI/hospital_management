import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {OnInit} from '@angular/core'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
fname:''
lname:''
email:''
address:''
phone:''
userDetails
  constructor(private auth:AuthService,private toastr:ToastrService,private router:Router) {
    
  }
  ngOnInit(): void {
    this.userDetail();
  }
  logout(){
    this.auth.loggedOut();
    this.toastr.success('Logout successfully..');
    this.router.navigate(['/home']);
  }

  userDetail(){
     
    this.auth.userDetail().subscribe((detail)=>{
      this.userDetails =detail.user
    // this.email=detail.user.email
    //   this.address=detail.user.address
    //   this.phone=detail.user.phoneNum
    //   this.fname=detail.user.firstName
    //   this.lname=detail.user.lastName
    })
  }
}
