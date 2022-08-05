import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponseBase } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserCredentials } from '../UserCredentials';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user!:UserCredentials;

  private token!:String;
  constructor(private http:HttpClient) { }
  

  url:string="http://localhost:8081/auth";
  login(userCredentials:UserCredentials):Observable<String>{
    return this.http.post<String>(this.url+"/login",userCredentials,{responseType:'text' as 'json'});
  }
  
  validateToken(token:String):Observable<Boolean>{
    return this.http.get<Boolean>(this.url+"/validate",{headers:{'Authorization':token.toString()},responseType:'text' as 'json'});
  }

  

}
