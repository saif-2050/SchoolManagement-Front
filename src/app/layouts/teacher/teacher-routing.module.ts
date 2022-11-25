import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { CheckAuthGuard } from '../../guards/check-auth.guard';
import { TeacherLayoutComponent } from './teacher-layout/teacher-layout.component';

const routes: Routes = [
  { path: '', component: TeacherLayoutComponent ,canActivate :[CheckAuthGuard]  }, 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
