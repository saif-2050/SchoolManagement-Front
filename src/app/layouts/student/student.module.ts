import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { StudentLayoutComponent } from './student-layout/student-layout.component';
import { ProfileComponent } from './student-layout/profile/profile.component';

@NgModule({
  declarations: [
     StudentLayoutComponent,
     ProfileComponent
    ],
  imports: [CommonModule, StudentRoutingModule],
})
export class StudentModule {}
