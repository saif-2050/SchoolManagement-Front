import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'frontend-teacher-layout',
  templateUrl: './teacher-layout.component.html',
  styleUrls: ['./teacher-layout.component.css'],
})
export class TeacherLayoutComponent implements OnInit {
  Name : any ; 
  Role : any ; 

  constructor(private service:AuthserviceService , private toastr: ToastrService , private route:Router ) {
    this.Name = this.service.getname() ; 
    this.Role = this.service.getrole();

  }
  logout(){

    this.service.RemoveData()
    this.toastr.success("you are successfully Logout", 'Logout');
    this.route.navigate(['/login']);
  }
  ngOnInit(): void {}
}
