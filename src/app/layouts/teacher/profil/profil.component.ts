import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  Name : any ; 
  Role :  any ;
  Id :  any ; 
  Email : any ; 
  DateB : any ; 
  Phone : any ; 
  data : any ; 
  newdate :any ; 
  constructor(private service : AuthserviceService ,public datepipe: DatePipe){
    this.Name = this.service.getname() ; 
    this.Role = this.service.getrole() ; 
    this.Id = this.service.getmyid() ;
    this.Email = this.service.getEmail() ;
    this.service.getoneteacher(this.Id).subscribe((result)=>{
      this.data = result
       this.Phone = this.data.Succ.Phone
       this.Email = this.data.Succ.Email
       this.newdate = new Date()
       this.DateB =this.datepipe.transform(this.newdate, 'yyyy-MM-dd');

    })


  }
}
