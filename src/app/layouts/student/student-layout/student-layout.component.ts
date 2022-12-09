import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'frontend-student-layout',
  templateUrl: './student-layout.component.html',
  styleUrls: ['./student-layout.component.css'],
})
export class StudentLayoutComponent implements OnInit {
  dash : any ; 
  ActiveMember : any = false ; 
  setting : any = false ;
  memberStyle = 'member-default';
  settingStyle = 'setting-default';
  Name : any ; 
  Role : any ; 
  constructor(private route:Router , private service:AuthserviceService , private toastr: ToastrService  ) {
    this.dash = this.route.url;
    this.Name = this.service.getname() ; 
    this.Role = this.service.getrole();
    
  }

  setsetting(){
    if (this.setting == false){
      this.settingStyle = 'setting-change';
      this.setting = true ;

    }else{
      this.setting = false ;
      this.settingStyle = 'setting-default';
    }
  }
  toggle(){
    if (this.ActiveMember == false){
      this.memberStyle = 'member-change';
      this.ActiveMember = true ;

    }else{
      this.ActiveMember = false ;
      this.memberStyle = 'member-default';
    }
  }
  logout(){

    this.service.RemoveData()
    this.toastr.success("you are successfully Logout", 'Logout');
    this.route.navigate(['/login']);
  }  ngOnInit(): void {}
}