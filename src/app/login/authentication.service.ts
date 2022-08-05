import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
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
    return this.http.post<String>(this.url+"/login",userCredentials,{responseType:'text' as 'json'})
    .pipe(catchError(this.errorHandler));
  }
  
  validateToken(token:String):Observable<Boolean>{
    return this.http.get<Boolean>(this.url+"/validate",{headers:{'Authorization':token.toString()},responseType:'text' as 'json'});
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error.error || "Server Error");
  }
  

}
