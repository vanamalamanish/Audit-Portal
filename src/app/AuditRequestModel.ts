import { AuditDetails } from "./AuditDetails";

export class AuditRequestModel{

    constructor(private requestid:number,private auditDetail:AuditDetails,private projectname:string,
        private managername:string,private ownername:string){
            this.requestid = requestid;
            this.auditDetail = auditDetail;
            this.projectname=projectname;
            this.managername=managername;
            this.ownername=ownername;
        }
    
    
}