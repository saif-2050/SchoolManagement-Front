import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editschedule',
  templateUrl: './editschedule.component.html',
  styleUrls: ['./editschedule.component.css']
})
export class EditscheduleComponent {
  step :any = 1 ; 
  allclass : any = [];
  resultClass : any ;
  resultSubject : any ;
  NameClass : any ; 
  allSubjects  : any = [];
  Teachers  : any = [];
  ResultTeachers : any ; 
  idshedule: any;
  ob_update : Subscription | undefined;
  editdata: any;
  DataResponse: any;
    constructor(private route:ActivatedRoute , private service: AuthserviceService , private toastr: ToastrService , private routes:Router){
    this.route.params.subscribe((data)=>{
     
      this.idshedule = data['id'] ;

    })
    this.service.getallsubject().subscribe(data =>{
      this.resultSubject = data ;
      this.resultSubject.forEach((item : any) =>{ 
      this.allSubjects.push(item["SubjectName"])
       })
    })

    this.ob_update = this.service.getoneschedule(this.idshedule).subscribe(item => {
      
      this.editdata = item;
      //console.log(this.editdata['Succ']._id)
      this.NameClass=  this.editdata['Succ'].ClassName
      this.service.getteachersbyClass(this.NameClass).subscribe(data =>{
        this.ResultTeachers = data ;
        //console.log(this.ResultTeachers)
       this.ResultTeachers.Succ.forEach((item : any) =>{
          this.Teachers.push(item["Name"])
         })
      }) 
    
     // console.log(this.NameClass)
      this.Reactiveform.setValue({
        Mon_9h: this.editdata['Succ'].Mon_9h,
        Mon_10h:this.editdata['Succ'].Mon_10h,
        Mon_13h: this.editdata['Succ'].Mon_13h,
        Mon_15h: this.editdata['Succ'].Mon_15h,
        MonTea_9h:this.editdata['Succ'].MonTea_9h,
        MonTea_10h: this.editdata['Succ'].MonTea_10h,
        MonTea_13h: this.editdata['Succ'].MonTea_13h,
        MonTea_15h: this.editdata['Succ'].MonTea_15h,
        Tue_9h: this.editdata['Succ'].Tue_9h,
        Tue_10h:this.editdata['Succ'].Tue_10h,
        Tue_13h: this.editdata['Succ'].Tue_13h,
        Tue_15h: this.editdata['Succ'].Tue_15h,
        TueTea_9h:this.editdata['Succ'].TueTea_9h,
        TueTea_10h: this.editdata['Succ'].TueTea_10h,
        TueTea_13h: this.editdata['Succ'].TueTea_13h,
        TueTea_15h: this.editdata['Succ'].TueTea_15h,
        Wen_9h: this.editdata['Succ'].Wen_9h,
        Wen_10h: this.editdata['Succ'].Wen_10h,
        Wen_13h: this.editdata['Succ'].Wen_13h,
        Wen_15h: this.editdata['Succ'].Wen_15h,
        WenTea_9h: this.editdata['Succ'].WenTea_9h,
        WenTea_10h: this.editdata['Succ'].WenTea_10h,
        WenTea_13h: this.editdata['Succ'].WenTea_13h,
        WenTea_15h: this.editdata['Succ'].WenTea_15h,
        Thu_9h: this.editdata['Succ'].Thu_9h,
        Thu_10h: this.editdata['Succ'].Thu_10h,
        Thu_13h: this.editdata['Succ'].Thu_13h,
        Thu_15h: this.editdata['Succ'].Thu_15h,
        ThuTea_9h: this.editdata['Succ'].ThuTea_9h,
        ThuTea_10h: this.editdata['Succ'].ThuTea_10h,
        ThuTea_13h: this.editdata['Succ'].ThuTea_13h,
        ThuTea_15h: this.editdata['Succ'].ThuTea_15h,
        Fri_9h: this.editdata['Succ'].Fri_9h,
        Fri_10h: this.editdata['Succ'].Fri_10h,
        Fri_13h: this.editdata['Succ'].Fri_13h,
        Fri_15h: this.editdata['Succ'].Fri_15h,
        FriTea_9h: this.editdata['Succ'].FriTea_9h,
        FriTea_10h: this.editdata['Succ'].FriTea_10h,
        FriTea_13h: this.editdata['Succ'].FriTea_13h,
        FriTea_15h: this.editdata['Succ'].FriTea_15h,
        Sat_9h: this.editdata['Succ'].Sat_9h,
        Sat_10h: this.editdata['Succ'].Sat_10h,
        Sat_13h: this.editdata['Succ'].Sat_13h,
        Sat_15h: this.editdata['Succ'].Sat_15h,
        SatTea_9h: this.editdata['Succ'].SatTea_9h,
        SatTea_10h: this.editdata['Succ'].SatTea_10h,
        SatTea_13h: this.editdata['Succ'].SatTea_13h,
        SatTea_15h: this.editdata['Succ'].SatTea_15h
      })
      });
      
       
        
  }
  Reactiveform = new FormGroup({
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
      this.service.editSchedule(this.editdata['Succ']._id,this.Reactiveform.value).subscribe((response)=>{
        this.DataResponse = response

        if (this.DataResponse.Succ){
          this.toastr.success("Shedule successfully Updated ", 'Saved');
          this.routes.navigate(['/admin/schedule']);

        }else if (this.DataResponse.error){
          this.toastr.error(this.DataResponse.error, 'Error');

        }

      })

    }else{
      this.toastr.error("please complete schedule", 'Error');

    }
  }
}
