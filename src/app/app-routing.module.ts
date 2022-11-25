import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';

const routes: Routes = [
  { path: '', loadChildren:()=>import('./layouts/landing/landing.module').then(m=>m.LandingModule) }, //lazy routing
  { path: 'admin', loadChildren:()=>import('./layouts/admin/admin.module').then(m=>m.AdminModule) },  //lazy routing
  { path: 'student', loadChildren:()=>import('./layouts/student/student.module').then(m=>m.StudentModule) },  //lazy routing
  { path: 'teacher', loadChildren:()=>import('./layouts/teacher/teacher.module').then(m=>m.TeacherModule) },  //lazy routing
  { path: 'login', component: LoginComponent },
  { path: 'Reset_Password', component: SetNewPasswordComponent , canActivate :[AuthGuard] },
  { path: '**', component: PageNotFoundComponent }, 

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
