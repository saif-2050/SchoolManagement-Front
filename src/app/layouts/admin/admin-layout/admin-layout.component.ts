import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'frontend-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css'],
})
export class AdminLayoutComponent implements OnInit {
  dash : any ; 
  ActiveMember : any = false ; 
  setting : any = false ;
  memberStyle = 'member-default';
  settingStyle = 'setting-default';

  constructor(private route:Router) {
    this.dash = this.route.url;
    
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
  ngOnInit(): void {}
}
