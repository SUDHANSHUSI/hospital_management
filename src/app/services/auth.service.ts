import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  register(data:any):Observable<any>{
    return this.http.post('http://localhost:5000/register',data);
  }

  login(data:any):Observable<any>{
    return this.http.post('http://localhost:5000/login',data);
  }
  appointment(data:any):Observable<any>{
    return this.http.post('http://localhost:5000/appointment',data);
  }


}
