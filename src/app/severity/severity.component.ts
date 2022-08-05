import { Component, OnInit } from '@angular/core';
import { ProjectDetailsService } from '../project-details.service';
import { AuditResponse } from './AuditResponse';
import { SeverityService } from './severity.service';

@Component({
  selector: 'app-severity',
  templateUrl: './severity.component.html',
  styleUrls: ['./severity.component.css']
})
export class SeverityComponent implements OnInit {

  constructor(private severityService:SeverityService) { }

  auditResponse!:AuditResponse;
  ngOnInit(): void {
    this.severityService.postSeverity().subscribe(data=>{
      this.auditResponse = data;
      console.log(data);
    },
    error=>{
      console.log(error);
    })
  }
}
