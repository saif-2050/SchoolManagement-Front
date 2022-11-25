import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material-module';
import { LoginComponent } from './login/login.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { AdminModule } from './layouts/admin/admin.module';
import { TeacherModule } from './layouts/teacher/teacher.module';
import { LandingModule } from './layouts/landing/landing.module';
import { StudentModule } from './layouts/student/student.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SetNewPasswordComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AdminModule,
    TeacherModule,
    LandingModule,
    StudentModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
