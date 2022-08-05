import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditformComponent } from './auditform/auditform.component';
import { LoginComponent } from './login/login.component';
import { SeverityComponent } from './severity/severity.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"checklist",component:AuditformComponent},
  {path:"severity",component:SeverityComponent},
  {path:"",redirectTo:"login",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
