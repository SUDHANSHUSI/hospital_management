import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospitalAuthService {

  constructor(private http:HttpClient) { }
  url=`http://localhost:5000/hospital/`


  doctorList(data,departmentId:string):Observable<any>{
    return this.http.post(`${this.url}doctor/${departmentId}`,data);
  }
}
