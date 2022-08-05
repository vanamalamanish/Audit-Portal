import { Component, OnInit } from '@angular/core';
import { ProjectDetailsService } from '../project-details.service';

@Component({
  selector: 'app-severity',
  templateUrl: './severity.component.html',
  styleUrls: ['./severity.component.css']
})
export class SeverityComponent implements OnInit {

  constructor(private projectDetailsService:ProjectDetailsService) { }

  ngOnInit(): void {
    console.log(this.projectDetailsService.getAuditRequestModel());
  }

}
