import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { UserCredentials } from '../UserCredentials';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token!:String;
  constructor(private authenticationService:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(userCredentials:UserCredentials){
    console.log(userCredentials.userName,userCredentials.password);
    this.authenticationService.login(userCredentials).subscribe(data=>{
      console.log(data);
      this.token = data;
      localStorage.setItem('token','Bearer '+this.token.toString());
      this.router.navigate(['checklist']);
    },
    error=>{
      console.log(error);
    })
  }

}
