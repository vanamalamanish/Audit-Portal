import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserCredentials } from './UserCredentials';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user!:UserCredentials;

  constructor(private http:HttpClient) { }

  url:string="http://localhost:8081/auth/login";
  login(userCredentials:UserCredentials):Observable<String>{
    return this.http.post<String>(this.url,userCredentials);
  }
  
  validateToken(token:String):Observable<Boolean>{
    return this.http.get<Boolean>(this.url,{headers:{'Authentication':token.toString()}});
  }

}
