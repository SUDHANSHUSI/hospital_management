import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  role:string=''
  constructor(private http:HttpClient) { }
 url=`http://localhost:5000/`
  register(data:any):Observable<any>{
  
    return this.http.post(`${this.url}register`,data);
  }

  login(data:any):Observable<any>{
    return this.http.post(`${this.url}login`,data);
  }

  appointment(data:any):Observable<any>{
    return this.http.post(`${this.url}appointment`,data,{
      headers:new HttpHeaders({
        authorization:`Bearer ${localStorage.getItem('token')}`
      })
    });
  }

  userDetail():Observable<any>{
    return this.http.get(`${this.url}user`,{
      headers:new HttpHeaders({
        authorization:`Bearer ${localStorage.getItem('token')}`
      })
    })
  }

  getAppointmentDetailForUser():Observable<any>{
    return this.http.get(`${this.url}appointment/user`,{
      headers:new HttpHeaders({
        authorization:`Bearer ${localStorage.getItem('token')}`
      })
    })
  }


  getAllAppointment():Observable<any>{
    return this.http.get(`${this.url}appointment`,{
      headers:new HttpHeaders({
        authorization:`Bearer ${localStorage.getItem('token')}`
      })
    })
  }

  updateAppointment(id:string):Observable<any>{
    return this.http.get(`${this.url}appointment/:id`,{
      headers:new HttpHeaders({
        authorization:`Bearer ${localStorage.getItem('token')}`
      })
    })
  }

  isLoggedIn(){
    return localStorage.getItem('token');
  }

  loggedOut(){
    localStorage.clear()
  }


}
