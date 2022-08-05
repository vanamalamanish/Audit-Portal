export class AuditResponse{
    constructor(private responseid:number,private executionstatus:string,private actionduration:string){
        this.responseid = responseid,
        this.executionstatus=executionstatus,
        this.actionduration=actionduration;
    }
}