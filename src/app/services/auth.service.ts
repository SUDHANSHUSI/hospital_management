import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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

  isLoggedIn(){
    return localStorage.getItem('token');
  }

  loggedOut(){
    localStorage.clear()
  }


}
