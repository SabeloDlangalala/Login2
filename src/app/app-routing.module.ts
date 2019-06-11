import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'employeedetails', component: EmployeedetailsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
