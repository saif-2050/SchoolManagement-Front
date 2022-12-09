import { Component } from '@angular/core';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.css']
})
export class SheduleComponent {

  idshedule= "" ;
  sheduledata : any  ;
  Id : any ; 
  result :any ; 
  created : any = "" ; 
  constructor( private service : AuthserviceService) {
    this.Id = this.service.getmyid() ;
    this.service.getonestudent(this.Id).subscribe((data)=>{
     
      this.result = data ;
 
       this.service.getscheduleByName(this.result.Succ.Class).subscribe((ddta: any)=>{
        this.sheduledata = ddta ;
       // console.log(this.sheduledata.Succ.ClassName)
        if(this.sheduledata.Succ){
          //this.sheduledata = this.sheduledata.Succ.ClassName ;
          this.created = "true" ;
        }else{
          this.created = "false" ;
        }
      }) 
    })

  
/* 
    this.service.getoneschedule(this.idshedule).subscribe((result)=>{
      this.sheduledata = result ; 
      console.log( this.sheduledata.Succ.ClassName );
    })
 */
    
  }
}