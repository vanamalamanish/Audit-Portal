export class AuditDetails{
    auditid!:number;
    audittype!:String;
    auditdate!:Date;
    countofno!:number;
    constructor( auditid:number,  audittype:string, auditdate:Date, countofno:number){
        this.auditid=auditid;
        this.audittype=audittype;
        this.auditdate=auditdate;
        this.countofno=countofno;
    }
}