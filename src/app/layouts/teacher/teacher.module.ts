import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherLayoutComponent } from './teacher-layout/teacher-layout.component';
import { ProfilComponent } from './profil/profil.component';
import { SheduleComponent } from './shedule/shedule.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material-module';

@NgModule({
  declarations: [TeacherLayoutComponent, ProfilComponent, SheduleComponent],
  imports: [CommonModule, TeacherRoutingModule ,MaterialModule,ReactiveFormsModule ],
})
export class TeacherModule {}
