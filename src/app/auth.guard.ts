import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './login/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authservice:AuthenticationService, private router:Router ){}
  canActivate(){
    if(this.authservice.isLoggedIn()){
      return true;
    }
    alert("Please Login In");
    this.router.navigate(["login"]);
    return false;
  }
  
}
