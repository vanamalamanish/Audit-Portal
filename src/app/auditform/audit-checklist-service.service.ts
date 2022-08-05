import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../login/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuditChecklistServiceService {

  constructor(private http:HttpClient,private authenticationService:AuthenticationService) { }
  

  url:string="http://localhost:8083/checklist";
  getQuestions(auditType:String):Observable<String[]>{
    return this.http.get<String[]>(this.url+"/AuditCheckListQuestions/"+auditType,{headers:{'Authorization':localStorage.getItem('token')!}});
  }
}
