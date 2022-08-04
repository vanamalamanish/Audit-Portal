import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { UserCredentials } from '../UserCredentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token!:string;
  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(userCredentials:UserCredentials){
    console.log(userCredentials.userName,userCredentials.password);
    this.authenticationService.login(userCredentials).subscribe((data)=>{
      console.log(data); 
    })
  }

}
