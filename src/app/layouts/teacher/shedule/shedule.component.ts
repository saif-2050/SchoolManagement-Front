import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.css']
})
export class SheduleComponent {
  step :any = 1 ; 
  allclass : any = [];
  resultClass : any ;
  Id : any ; 
  result : any ; 
  sheduledata : any ;
  NameClass : any ;  
  created : any ;
  constructor(private service: AuthserviceService  , private toastr: ToastrService , private routes:Router ){}

  ngOnInit(): void {
    this.Id = this.service.getmyid() ; 
    this.service.getoneteacher(this.Id).subscribe((data)=>{
      this.result =  data ; 
      console.log(this.result)
      this.result.Succ.Class.forEach((item : any) =>{
        this.allclass.push(item)
       })
    })
       
  }
  Reactiveform = new FormGroup({
    ClassName: new FormControl("", Validators.required),  
  });

  Next(){
    if ( this.Reactiveform.value.ClassName !="" ){
      this.step = this.step + 1 ;
      this.NameClass = this.Reactiveform.value.ClassName ;
      this.service.getscheduleByName( this.NameClass).subscribe((ddta: any)=>{
        this.sheduledata = ddta ;
        if(this.sheduledata.Succ){
          //this.sheduledata = this.sheduledata.Succ.ClassName ;
          this.created = "true" ;
        }else{
          this.created = "false" ;
        }
      }) 
    }
  


  }
  Previous(){
    this.step = this.step - 1 ;

  }

}
