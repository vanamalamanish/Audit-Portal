import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../login/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }
 
  userName = this.authService.getUserName() || "Unknown";


  OnLogOut(){
    this.userName="Unknown";
    localStorage.removeItem('token');
    this.router.navigate(["login"]);
  }
}
