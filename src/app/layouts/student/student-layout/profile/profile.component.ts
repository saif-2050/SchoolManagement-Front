import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  dataSource :any ;
  data :any ;
  rel : any ;
  Name : any ; 
  Role :  any ;
  Id :  any ; 
  Email : any ; 
  DateB : any ; 
  Phone : any ; 
  newdate:any ;

  constructor(private service:AuthserviceService ,public datepipe: DatePipe) {
    this.Name = this.service.getname() ; 
    this.Role = this.service.getrole() ; 
    this.Id = this.service.getmyid() ;
    this.service.getonestudent(this.Id).subscribe((result)=>{
      this.data = result
       this.Phone = this.data.Succ.Phone
       this.Email = this.data.Succ.Email
       this.newdate = new Date()
       this.DateB =this.datepipe.transform(this.newdate, 'yyyy-MM-dd');

    })
  }

  ngOnInit(): void {

  }

  


  


}
