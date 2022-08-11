import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { UserCredentials } from '../UserCredentials';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user!:UserCredentials;
  userName:String="Unknown";
  private token!:String;
  constructor(private http:HttpClient) { }
  

  url:string="http://cde015-pod1-audit-auth-lb-639075357.ap-south-1.elb.amazonaws.com/auth";
  login(userCredentials:UserCredentials):Observable<String>{
    this.userName = userCredentials.userName;
    return this.http.post<String>(this.url+"/login",userCredentials,{responseType:'text' as 'json'})
    .pipe(catchError(this.errorHandler));
  }
  
  validateToken(token:String):Observable<Boolean>{
    return this.http.get<Boolean>(this.url+"/validate",{headers:{'Authorization':token.toString()},responseType:'text' as 'json'});
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error.error);
  }

  isLoggedIn(){
    return !!localStorage.getItem('token');
  }
  
  getUserName(){
    return this.userName;
  }

}
