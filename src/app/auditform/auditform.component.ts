import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuditDetails } from '../AuditDetails';
import { AuditRequestModel } from '../AuditRequestModel';
import { ProjectDetailsService } from '../project-details.service';
import { AuditChecklistServiceService } from './audit-checklist-service.service';

@Component({
  selector: 'app-auditform',
  templateUrl: './auditform.component.html',
  styleUrls: ['./auditform.component.css']
})
export class AuditformComponent implements OnInit {
  projectname!: String;
  ownername!:String;
  managername!:String;
  audittype!:string;
  constructor(private auditchecklistService:AuditChecklistServiceService,
     private projectDetailsService:ProjectDetailsService,
     private router:Router) { }
  questions!:String[];
  auditrequestModel!:AuditRequestModel;
  auditDetails!:AuditDetails;
  ngOnInit(): void {
  }
  OnClick(projectinfo:any){
    console.log();
    this.projectname = projectinfo['projectname'];
    this.managername = projectinfo['managername'];
    this.ownername = projectinfo['ownername'];
    this.audittype = projectinfo['audittype'];
    this.auditchecklistService.getQuestions(projectinfo['audittype']).subscribe(data=>{
      console.log(data);

      this.questions=data;
    },
    error=>{
      console.log(error);
    })
  }
  checkSeverity(questions:any){
    let count=0;
    for(let i=0;i<5;i++){
      if(questions[i]=='No'){
        count+=1;
      }
    }
    console.log(count);
    this.auditDetails = new AuditDetails(1,this.audittype.toString(),"",count);
    this.projectDetailsService.saveAuditRequestModel(1,this.auditDetails,this.projectname.toString(),this.managername.toString(),this.ownername.toString());
    console.log(this.projectDetailsService.getAuditRequestModel());
    this.router.navigate(['severity']);
  }
}
