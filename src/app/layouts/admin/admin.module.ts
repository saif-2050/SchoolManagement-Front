import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './admin-layout/admin-dashboard/admin-dashboard.component';
import { StudentsManagementComponent } from './admin-layout/students-management/students-management.component';
import { TeachersManagementComponent } from './admin-layout/teachers-management/teachers-management.component';
import {MaterialModule} from '../../material-module';
import { ModalpopupComponent } from './admin-layout/students-management/modalpopup/modalpopup.component'
import { ReactiveFormsModule } from '@angular/forms';
import { DeletepopupComponent } from './admin-layout/students-management/deletepopup/deletepopup.component';
import { ClassManagementComponent } from './admin-layout/class-management/class-management.component';
import { SubjectManagementComponent } from './admin-layout/subject-management/subject-management.component';
import { ScheduleComponent } from './admin-layout/schedule/schedule.component';
import { ClassmodalpopupComponent } from './admin-layout/class-management/classmodalpopup/classmodalpopup.component';
import { ClassdeletemodalComponent } from './admin-layout/class-management/classdeletemodal/classdeletemodal.component';
import { SubjectmodalpopupComponent } from './admin-layout/subject-management/subjectmodalpopup/subjectmodalpopup.component';
import { DeleesubjectmodalComponent } from './admin-layout/subject-management/deleesubjectmodal/deleesubjectmodal.component';
import { AddsheduleComponent } from './admin-layout/schedule/addshedule/addshedule.component';
import { ShowsheduleComponent } from './admin-layout/schedule/showshedule/showshedule.component';
import { EditscheduleComponent } from './admin-layout/schedule/editschedule/editschedule.component';

import { AddpopupComponent } from './admin-layout/teachers-management/addpopup/addpopup.component';
import { tDeletepopupComponent } from './admin-layout/teachers-management/tdeletepopup/tdeletepopup.component';
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
    ClassmodalpopupComponent,
    ClassdeletemodalComponent,
    SubjectmodalpopupComponent,
    DeleesubjectmodalComponent,
    AddsheduleComponent,
    ShowsheduleComponent,
    EditscheduleComponent,
    AddpopupComponent,
    tDeletepopupComponent
  ],
  imports: [CommonModule, AdminRoutingModule,MaterialModule,ReactiveFormsModule],
})
export class AdminModule {}
