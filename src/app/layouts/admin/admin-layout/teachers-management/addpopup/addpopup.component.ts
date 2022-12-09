import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { ModalpopupComponent } from '../../students-management/modalpopup/modalpopup.component';


@Component({
  selector: 'app-addpopup',
  templateUrl: './addpopup.component.html',
  styleUrls: ['./addpopup.component.css']
})
export class AddpopupComponent implements OnInit{
  constructor(private toastr: ToastrService ,private service: AuthserviceService, public dialogref: MatDialogRef<ModalpopupComponent>,@Inject(MAT_DIALOG_DATA) public data:any){}
  editdata:any;
  Name : any ;
  Classes : any = [];
  info : any ;
  DataResponse :any ;
  ob_update : Subscription | undefined;
  ob_add : Subscription | undefined;
  resultTeachers: any ;
  ngOnInit(): void {
   // console.log(this.data)
    if(this.data.id!=null && this.data.id!=''){
        this.LoadEditData(this.data.id);
       
      }
      this.service.getallclass().subscribe(data =>{
        this.resultTeachers = data ;
        this.resultTeachers.forEach((item : any) =>{ 
        this.Classes.push(item["ClassName"])
         })
      })
    }
    ngOnDestroy():void{
      this.ob_update?.unsubscribe();
      this.ob_add?.unsubscribe();
  
    }
    Reactiveform = new FormGroup({
      cin: this.data.info == "add" ? new FormControl( "", Validators.required ) : new FormControl({ value: 0, disabled: true }),
      Name: new FormControl("", Validators.required),
      Email: new FormControl("", Validators.required),
      Phone: new FormControl("", Validators.required),
      Birthday: new FormControl("", Validators.required),
      Gender: new FormControl("M"),
      Class: new FormControl("",Validators.required),
    });
  
    LoadEditData(id: any) {
     this.ob_update = this.service.getoneteacher(id).subscribe(item => {
     
        this.editdata = item;
        this.Reactiveform.setValue({cin:this.editdata['Succ'].cin,Name:this.editdata['Succ'].Name,Email:this.editdata['Succ'].Email,
          Phone:this.editdata['Succ'].Phone,Birthday:this.editdata['Succ'].Birthday, Gender:'M',Class:this.editdata['Succ'].Class })
    });
    }
  
    SaveTeacher(){
      
     if (this.Reactiveform.valid && this.data.info =="add" ) {
      
 
        this.ob_add = this.service.addteacher(this.Reactiveform.value).subscribe((response) =>{ 
          this.DataResponse = response
  
          if (this.DataResponse.error){
             this.toastr.error(this.DataResponse.error, 'Error');
  
  
  
      }else if(this.DataResponse.Succ){
        this.toastr.success("Teacher Successful Added", 'Success');
  
        this.dialogref.close("added");
  
      }
        });
  
      }else if(this.Reactiveform.valid && this.data.info =="update") {
        this.ob_add = this.service.updateTeacher(this.data.id,this.Reactiveform.value).subscribe((response) =>{ 
          this.DataResponse = response
  
          if (this.DataResponse.error){
             this.toastr.error(this.DataResponse.error, 'Error');
  
          }else if(this.DataResponse.Succ){
            this.toastr.success("Teacher Successful Updated", 'Success');
            this.dialogref.close("update");
  
          }
        });}
     
    }
  }
  
