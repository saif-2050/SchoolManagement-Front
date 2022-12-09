import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckAuthGuard } from 'src/app/guards/check-auth.guard';

import { ProfileComponent } from './student-layout/profile/profile.component';
import { SheduleComponent } from './student-layout/shedule/shedule.component';
import { StudentLayoutComponent } from './student-layout/student-layout.component';

const routes: Routes = [
    { path: '', component: StudentLayoutComponent, canActivate :[CheckAuthGuard], children:[
     {path :'profil',component : ProfileComponent},
     {path :'shedule',component : SheduleComponent},

  ]}

];
  



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
