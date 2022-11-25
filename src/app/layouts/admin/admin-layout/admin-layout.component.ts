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
  memberStyle = 'member-default';
  constructor(private route:Router) {
    this.dash = this.route.url;
    
  }

  toggle(){
    console.log(this.ActiveMember)
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
