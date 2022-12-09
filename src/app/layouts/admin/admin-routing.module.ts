import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuard } from '../../guards/admin-auth.guard';
import { AdminDashboardComponent } from './admin-layout/admin-dashboard/admin-dashboard.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { ClassManagementComponent } from './admin-layout/class-management/class-management.component';
import { MyprofilComponent } from './admin-layout/myprofil/myprofil.component';
import { AddsheduleComponent } from './admin-layout/schedule/addshedule/addshedule.component';
import { EditscheduleComponent } from './admin-layout/schedule/editschedule/editschedule.component';
import { ScheduleComponent } from './admin-layout/schedule/schedule.component';
import { ShowsheduleComponent } from './admin-layout/schedule/showshedule/showshedule.component';
import { StudentsManagementComponent } from './admin-layout/students-management/students-management.component';
import { SubjectManagementComponent } from './admin-layout/subject-management/subject-management.component';
import { TeachersManagementComponent } from './admin-layout/teachers-management/teachers-management.component';

const routes: Routes = [
  { path: '', component: AdminLayoutComponent , canActivate :[AdminAuthGuard] ,children:[
  { path: '', component: AdminDashboardComponent },
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'students', component: StudentsManagementComponent },
  { path: 'teachers', component: TeachersManagementComponent },
  { path: 'subject', component: SubjectManagementComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'addschedule', component: AddsheduleComponent },
  { path: 'schedule/:id', component: ShowsheduleComponent },
  { path: 'editschedule/:id', component: EditscheduleComponent },
  { path: 'class', component: ClassManagementComponent },
  { path: 'myprofil', component: MyprofilComponent },


  ] },   // Check auth Admin && ajouter partie Admin (Template)


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
