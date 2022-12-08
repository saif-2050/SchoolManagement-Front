import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-classmodalpopup',
  templateUrl: './classmodalpopup.component.html',
  styleUrls: ['./classmodalpopup.component.css']
})
export class ClassmodalpopupComponent {
editdata:any;
info : any ;
DataResponse :any ;
ob_update : Subscription | undefined;
ob_add : Subscription | undefined;
  constructor(private toastr: ToastrService ,private service: AuthserviceService, public dialogref: MatDialogRef<ClassmodalpopupComponent>,@Inject(MAT_DIALOG_DATA) public data:any){}

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

     LoadEditData(id: any) {
      
       this.ob_update = this.service.getoneclass(id).subscribe(item => {
      
         this.editdata = item;
         this.Reactiveform.setValue({ClassName:this.editdata['Succ'].ClassName})
     }); 
     }
  Reactiveform = new FormGroup({
    ClassName: new FormControl("", Validators.required)
  });

  SaveClass(){

    if (this.Reactiveform.valid && this.data.info =="add") {

      this.ob_add = this.service.addClass(this.Reactiveform.value).subscribe((response) =>{ 
        this.DataResponse = response

        if (this.DataResponse.error){
           this.toastr.error(this.DataResponse.error, 'Error');



    }else if(this.DataResponse.Succ){
      this.toastr.success("Class Successful Added", 'Success');

      this.dialogref.close("added");

    }
      });

    }else if(this.Reactiveform.valid && this.data.info =="update") {
      this.ob_add = this.service.updateClass(this.data.id,this.Reactiveform.value).subscribe((response) =>{ 
        this.DataResponse = response

        if (this.DataResponse.error){
           this.toastr.error(this.DataResponse.error, 'Error');

        }else if(this.DataResponse.Succ){
          this.toastr.success("Class Successful Updated", 'Success');
          this.dialogref.close("update");

        }
      });
    }
  }
}
