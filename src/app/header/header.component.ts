import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../login/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }
  userName!:string;
  ngOnInit(): void {
    this.userName = localStorage.getItem('username') || "Unknown";
  }
 

  checkToken(){
   return  !!localStorage.getItem('token');
  }

  OnLogOut(){
    this.userName="Unknown";
    localStorage.removeItem('token');
    localStorage.setItem('username',"Unknown");
    this.router.navigate(["login"]);
  }
}
