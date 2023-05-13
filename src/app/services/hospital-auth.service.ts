import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospitalAuthService {

  constructor(private http:HttpClient) { }
  url=`http://localhost:5000/`


  doctorList():Observable<any>{
    return this.http.get(`${this.url}hospital/doctor`);
  }

  hospitalList():Observable<any>{
    return this.http.get(`${this.url}department`);
  }

  getDepartment(id:string):Observable<any>{
    return this.http.get(`${this.url}department/${id}`);
  }

  createDepartment(data:any):Observable<any>{
    return this.http.post(`${this.url}department`,data);
  }

  createDoctor(departmentId:string,data:any):Observable<any>{
    return this.http.post(`${this.url}hospital/doctor/${departmentId}`,data)
  }
}
