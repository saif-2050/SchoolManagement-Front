import { Component,  Inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.component.html',
  styleUrls: ['./modalpopup.component.css']
})
export class ModalpopupComponent implements OnInit {
constructor(private toastr: ToastrService ,private service: AuthserviceService, public dialogref: MatDialogRef<ModalpopupComponent>,@Inject(MAT_DIALOG_DATA) public data:any){}
editdata:any;
Name : any ;
genders : any = ["2INFO1" , "2INFO3"];
info : any ;
DataResponse :any ;
ob_update : Subscription | undefined;
ob_add : Subscription | undefined;

ngOnInit(): void {
 // console.log(this.data)
  if(this.data.id!=null && this.data.id!=''){
      this.LoadEditData(this.data.id);
     
    }
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
   this.ob_update = this.service.getonestudent(id).subscribe(item => {
   
      this.editdata = item;
      this.Reactiveform.setValue({cin:this.editdata['Succ'].cin,Name:this.editdata['Succ'].Name,Email:this.editdata['Succ'].Email,
        Phone:this.editdata['Succ'].Phone,Birthday:this.editdata['Succ'].Birthday, Gender:'M',Class:this.editdata['Succ'].Class })
  });
  }

  SaveStudent(){
    if (this.Reactiveform.valid && this.data.info =="add") {

      this.ob_add = this.service.addstudent(this.Reactiveform.value).subscribe((response) =>{ 
        this.DataResponse = response

        if (this.DataResponse.error){
           this.toastr.error(this.DataResponse.error, 'Error');



    }else if(this.DataResponse.Succ){
      this.toastr.success("Student Successful Added", 'Success');

      this.dialogref.close("added");

    }
      });

    }else if(this.Reactiveform.valid && this.data.info =="update") {
      this.ob_add = this.service.updateStudent(this.data.id,this.Reactiveform.value).subscribe((response) =>{ 
        this.DataResponse = response

        if (this.DataResponse.error){
           this.toastr.error(this.DataResponse.error, 'Error');

        }else if(this.DataResponse.Succ){
          this.toastr.success("Student Successful Updated", 'Success');
          this.dialogref.close("update");

        }
      });
    }
  }
}
