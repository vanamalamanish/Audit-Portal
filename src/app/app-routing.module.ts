import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditformComponent } from './auditform/auditform.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { SeverityComponent } from './severity/severity.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"checklist",component:AuditformComponent,canActivate:[AuthGuard]},
  {path:"severity",component:SeverityComponent,canActivate:[AuthGuard]},
  {path:"",redirectTo:"login",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
