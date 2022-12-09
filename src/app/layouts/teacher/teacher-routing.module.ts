import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { CheckAuthGuard } from '../../guards/check-auth.guard';
import { ProfilComponent } from './profil/profil.component';
import { SheduleComponent } from './shedule/shedule.component';
import { TeacherLayoutComponent } from './teacher-layout/teacher-layout.component';


const routes: Routes = [
  { path: '', component: TeacherLayoutComponent, canActivate :[CheckAuthGuard], children:[
   {path :'profil',component : ProfilComponent},
   {path :'shedule',component : SheduleComponent},

]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
