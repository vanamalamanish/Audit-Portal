import { Injectable } from '@angular/core';
import { AuditDetails } from './AuditDetails';
import { AuditRequestModel } from './AuditRequestModel';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailsService {

  constructor() { }
  auditRequestModel!:AuditRequestModel;


  saveAuditRequestModel(requestid:number,auditDetails:AuditDetails,projectname:string,managername:string,ownername:string)
  {
    this.auditRequestModel = new AuditRequestModel(requestid,auditDetails,projectname,managername,ownername);
  }
  getAuditRequestModel(){
    return this.auditRequestModel;
  }
}
