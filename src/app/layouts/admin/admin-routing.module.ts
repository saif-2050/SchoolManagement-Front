import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuard } from '../../guards/admin-auth.guard';
import { StudentLayoutComponent } from '../student/student-layout/student-layout.component';
import { TeacherLayoutComponent } from '../teacher/teacher-layout/teacher-layout.component';
import { AdminDashboardComponent } from './admin-layout/admin-dashboard/admin-dashboard.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { ClassManagementComponent } from './admin-layout/class-management/class-management.component';
import { ScheduleComponent } from './admin-layout/schedule/schedule.component';
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
  { path: 'class', component: ClassManagementComponent },

  ] },   // Check auth Admin && ajouter partie Admin (Template)


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
