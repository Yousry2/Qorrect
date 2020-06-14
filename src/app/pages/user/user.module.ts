import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';



@NgModule({
  declarations: [UserManagementComponent, UserDetailsComponent, UserDashboardComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
