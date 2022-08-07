import { Component, OnInit } from '@angular/core';
import { AuditRequestModel } from '../AuditRequestModel';
import { ProjectDetailsService } from '../project-details.service';
import { AuditResponse } from './AuditResponse';
import { SeverityService } from './severity.service';

@Component({
  selector: 'app-severity',
  templateUrl: './severity.component.html',
  styleUrls: ['./severity.component.css']
})

export class SeverityComponent implements OnInit {

  constructor(private severityService:SeverityService,private projectdetailsservice:ProjectDetailsService) { }
  auditrequest!:AuditRequestModel;
  auditResponse!:AuditResponse;
  ngOnInit(): void {
    this.severityService.postSeverity().subscribe(data=>{
      this.auditResponse = data;
      this.auditrequest=this.projectdetailsservice.getAuditRequestModel();
      console.log(data);
    },
    error=>{
      console.log(error);
    })
  }
}
