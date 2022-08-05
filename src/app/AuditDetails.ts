export class AuditDetails{
   
    constructor(private auditid:number, private audittype:string,private auditdate:String,private countofno:number){
        this.auditid=auditid;
        this.audittype=audittype;
        this.auditdate=auditdate;
        this.countofno=countofno;
    }
}