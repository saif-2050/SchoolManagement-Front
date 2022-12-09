import { Component } from '@angular/core';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-myprofil',
  templateUrl: './myprofil.component.html',
  styleUrls: ['./myprofil.component.css']
})
export class MyprofilComponent {
  Name : any ; 
  Role :  any ;
  Id :  any ; 
  Email : any ; 
  DateB : any ; 
  Phone : any ; 

  constructor(private service : AuthserviceService){
    this.Name = this.service.getname() ; 
    this.Role = this.service.getrole() ; 
    this.Id = this.service.getmyid() ;
    this.Email = this.service.getEmail() ;
    


  }
}
