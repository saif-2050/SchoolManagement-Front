import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { StudentLayoutComponent } from './student-layout/student-layout.component';
import { ProfileComponent } from './student-layout/profile/profile.component';
import { SheduleComponent } from './student-layout/shedule/shedule.component';

@NgModule({
  declarations: [
     StudentLayoutComponent,
     ProfileComponent,
     SheduleComponent
    ],
  imports: [CommonModule, StudentRoutingModule],
})
export class StudentModule {}
