import { Injectable } from '@angular/core';
import { AuditDetails } from './AuditDetails';
import { AuditRequestModel } from './AuditRequestModel';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailsService {

  constructor() { }
  auditDetails!:AuditDetails;
  auditRequestModel!:AuditRequestModel;

  saveAuditDetails(requestid:number,audittype:string,date:Date,countofnos:number):void{
    this.auditDetails = new AuditDetails(requestid,audittype,date,countofnos);
  }
  getAuditDetails():AuditDetails{
    return this.auditDetails;
  }

  saveAuditRequestModel(requestid:number,auditDetail:AuditDetails,projectname:string,managername:string,ownername:string)
  {
    this.auditRequestModel = new AuditRequestModel(requestid,this.auditDetails,projectname,managername,ownername);
  }
  getAuditRequestModel(){
    return this.auditRequestModel;
  }
}
