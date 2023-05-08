import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/services/auth.service';
import {MatDialog} from "@angular/material/dialog"
import { UpdatePopupComponent } from '../update-popup/update-popup.component';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['PatientName', 'Age', 'BloodGroup', 'Date','Department','DoctorName','Gender','Phone','AppointmentType','status','Action'];
  dataSource: MatTableDataSource<UserData>;
  allAppointment:UserData[]=[];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private auth:AuthService , private dialog:MatDialog) {
  
    this.dataSource = new MatTableDataSource<UserData>
  }
  ngOnInit(): void {
    this.getAllAppointment();
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllAppointment(){
    this.auth.getAllAppointment().subscribe((res)=>{
      this.allAppointment=res.appointment;
      this.dataSource=new MatTableDataSource<UserData>(this.allAppointment);
      console.log(this.allAppointment);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  updateData(id:string){
    this.dialog.open(UpdatePopupComponent,{
      enterAnimationDuration:'500ms',
      exitAnimationDuration:'500ms',
      width:'50%',
      data:{
        id:id,
      }
    })
  }
  
}

export interface UserData {
  fName:string;
  lName:string;
  age: number;
  bloodGroup: string;
  date: Date;
  department:string;
  doctorName:string;
  gender:string;
  phone:number;
  appointmentType:string;
  canActiveAppointment:boolean;
}

// function createNewUser(id: number): UserData {
//   const patientName =
//     this.allAppointment[Math.round(Math.random() * (fName.length - 1))] +
//     ' ' +
//     this.allAppointment[Math.round(Math.random() * (lName.length - 1))].charAt(0) +
//     '.';

//   return {
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
//   };
// }