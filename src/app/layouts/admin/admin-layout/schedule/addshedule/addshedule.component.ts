import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addshedule',
  templateUrl: './addshedule.component.html',
  styleUrls: ['./addshedule.component.css']
})
export class AddsheduleComponent {
  step :any = 1 ; 
  allclass : any = [];
  resultClass : any ;
  resultSubject : any ;
  NameClass : any ; 
  allSubjects  : any = [];
  Teachers  : any = [];
  ResultTeachers : any ;
  DataResponse :any ;
  constructor(private service: AuthserviceService  , private toastr: ToastrService , private routes:Router ){}

  ngOnInit(): void {
    this.service.getallsubject().subscribe(data =>{
      this.resultSubject = data ;
      this.resultSubject.forEach((item : any) =>{
        //console.log( item); 
        this.allSubjects.push(item["SubjectName"])
       })
    })
     

    this.service.getallclass().subscribe(data =>{
      //this.allclass.push(data["ClassName"]);
      this.resultClass = data ;
      this.resultClass.forEach((item : any) =>{
        //console.log( item);
        if (item["Created"] == "No"){
            this.allclass.push(item["ClassName"])
        }
       })
     
    })

    //console.log(this.allSubjects)
   
   
  }
  Reactiveform = new FormGroup({
    ClassName: new FormControl("", Validators.required),
    Mon_9h: new FormControl("",Validators.required),
    Mon_10h: new FormControl("",Validators.required),
    Mon_13h: new FormControl("",Validators.required),
    Mon_15h: new FormControl("",Validators.required),

    MonTea_9h: new FormControl("",Validators.required),
    MonTea_10h: new FormControl("",Validators.required),
    MonTea_13h: new FormControl("",Validators.required),
    MonTea_15h: new FormControl("",Validators.required),

    Tue_9h: new FormControl("",Validators.required),
    Tue_10h: new FormControl("",Validators.required),
    Tue_13h: new FormControl("",Validators.required),
    Tue_15h: new FormControl("",Validators.required),

    TueTea_9h: new FormControl("",Validators.required),
    TueTea_10h: new FormControl("",Validators.required),
    TueTea_13h: new FormControl("",Validators.required),
    TueTea_15h: new FormControl("",Validators.required),

    Wen_9h: new FormControl("",Validators.required),
    Wen_10h: new FormControl("",Validators.required),
    Wen_13h: new FormControl("",Validators.required),
    Wen_15h: new FormControl("",Validators.required),

    WenTea_9h: new FormControl("",Validators.required),
    WenTea_10h: new FormControl("",Validators.required),
    WenTea_13h: new FormControl("",Validators.required),
    WenTea_15h: new FormControl("",Validators.required),

    Thu_9h: new FormControl("",Validators.required),
    Thu_10h: new FormControl("",Validators.required),
    Thu_13h: new FormControl("",Validators.required),
    Thu_15h: new FormControl("",Validators.required),

    ThuTea_9h: new FormControl("",Validators.required),
    ThuTea_10h: new FormControl("",Validators.required),
    ThuTea_13h: new FormControl("",Validators.required),
    ThuTea_15h: new FormControl("",Validators.required),

    Fri_9h: new FormControl("",Validators.required),
    Fri_10h: new FormControl("",Validators.required),
    Fri_13h: new FormControl("",Validators.required),
    Fri_15h: new FormControl("",Validators.required),

    FriTea_9h: new FormControl("",Validators.required),
    FriTea_10h: new FormControl("",Validators.required),
    FriTea_13h: new FormControl("",Validators.required),
    FriTea_15h: new FormControl("",Validators.required),

    Sat_9h: new FormControl("",Validators.required),
    Sat_10h: new FormControl("",Validators.required),
    Sat_13h: new FormControl("",Validators.required),
    Sat_15h: new FormControl("",Validators.required),

    SatTea_9h: new FormControl("",Validators.required),
    SatTea_10h: new FormControl("",Validators.required),
    SatTea_13h: new FormControl("",Validators.required),
    SatTea_15h: new FormControl("",Validators.required),

   
  });
  SaveSchedule(){
  
    if (this.Reactiveform.valid ) {
      this.service.addSchedule(this.Reactiveform.value).subscribe((response)=>{
        this.DataResponse = response

        if (this.DataResponse.Succ){
          this.toastr.success("Shedule successfully Added ", 'Saved');
          this.routes.navigate(['/admin/schedule']);


        }else if (this.DataResponse.error){
          this.toastr.error(this.DataResponse.error, 'Error');

        }

      })
      //console.log(this.Reactiveform.value);

    }else{
      console.log("please complete schedule");
      this.toastr.warning("please complete schedule", 'Warn');

    }
  }


  Next(){
    if ( this.Reactiveform.value.ClassName !="" ){
      this.step = this.step + 1 ;
      this.NameClass = this.Reactiveform.value.ClassName ;
      this.Teachers =[];
      this.ResultTeachers = [] ;
      this.service.getteachersbyClass(this.NameClass).subscribe(data =>{
        this.ResultTeachers = data ;
        this.ResultTeachers.Succ.forEach((item : any) =>{
          this.Teachers.push(item["Name"])
         })
      })
    }
  


  }
  Previous(){
    this.step = this.step - 1 ;

  }



}
