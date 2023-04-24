import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DepartmentComponent } from './department/department.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'contact',component:ContactComponent},
  {path:'service',component:ServiceComponent},
  {path:'doctor',component:DoctorComponent},
  {path:'department',component:DepartmentComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
