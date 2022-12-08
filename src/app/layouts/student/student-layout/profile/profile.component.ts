import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  dataSource :any ;
  data :any ;
  rel : any ;

  

  constructor(private auth:AuthserviceService ) {}

  ngOnInit(): void {
    this.getStudentData();
  }
  getStudentData(){
    this.auth.getstudents().subscribe((result: any)=>{
      this.data = result ;
     

       })
  }

  Filterchange(event: Event) {
    const filvalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;
  }

  


}
