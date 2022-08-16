import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectDetailsService } from '../project-details.service';
import { AuditResponse } from './AuditResponse';

@Injectable({
  providedIn: 'root'
})
export class SeverityService {

  constructor(private projectDetailsService:ProjectDetailsService,private http:HttpClient) { }
  
  url:string = "http://localhost:8084/severity";
  postSeverity():Observable<AuditResponse>{
    console.log(this.projectDetailsService.getAuditRequestModel());
    const auditRequest= this.projectDetailsService.getAuditRequestModel();
    return this.http.post<AuditResponse>(this.url+"/ProjectExecutionStatus",auditRequest,{headers:{'Authorization':localStorage.getItem('token')!,responseType:'text' as 'json'}});
  }
}
