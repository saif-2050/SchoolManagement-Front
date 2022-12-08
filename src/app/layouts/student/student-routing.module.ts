import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './student-layout/profile/profile.component';
import { StudentLayoutComponent } from './student-layout/student-layout.component';

const routes: Routes = [
  { path: '', component: StudentLayoutComponent,  children:[
    {path :'profile',component :ProfileComponent},
  ]}

];
  



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
