import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './admin-layout/admin-dashboard/admin-dashboard.component';
import { StudentsManagementComponent } from './admin-layout/students-management/students-management.component';
import { TeachersManagementComponent } from './admin-layout/teachers-management/teachers-management.component';
import {MaterialModule} from '../../material-module';
import { ModalpopupComponent } from './admin-layout/modalpopup/modalpopup.component'
import { ReactiveFormsModule } from '@angular/forms';
import { DeletepopupComponent } from './admin-layout/deletepopup/deletepopup.component';
import { ClassManagementComponent } from './admin-layout/class-management/class-management.component';
import { SubjectManagementComponent } from './admin-layout/subject-management/subject-management.component';
import { ScheduleComponent } from './admin-layout/schedule/schedule.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminDashboardComponent,
    StudentsManagementComponent,
    TeachersManagementComponent,
    ModalpopupComponent,
    DeletepopupComponent,
    ClassManagementComponent,
    SubjectManagementComponent,
    ScheduleComponent,
  ],
  imports: [CommonModule, AdminRoutingModule,MaterialModule,ReactiveFormsModule],
})
export class AdminModule {}
