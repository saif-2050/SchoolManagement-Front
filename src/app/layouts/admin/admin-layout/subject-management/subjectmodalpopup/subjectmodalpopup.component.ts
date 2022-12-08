import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-subjectmodalpopup',
  templateUrl: './subjectmodalpopup.component.html',
  styleUrls: ['./subjectmodalpopup.component.css']
})
export class SubjectmodalpopupComponent {
  editdata:any;
  info : any ;
  DataResponse :any ;
  ob_update : Subscription | undefined;
  ob_add : Subscription | undefined;
    constructor(private toastr: ToastrService ,private service: AuthserviceService, public dialogref: MatDialogRef<SubjectmodalpopupComponent>,@Inject(MAT_DIALOG_DATA) public data:any){}
  
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
        
         this.ob_update = this.service.getonesubject(id).subscribe(item => {
        
           this.editdata = item;
           this.Reactiveform.setValue({SubjectName:this.editdata['Succ'].SubjectName})
       }); 
       }
    Reactiveform = new FormGroup({
      SubjectName: new FormControl("", Validators.required)
    });
  
    SaveSubject(){
  
      if (this.Reactiveform.valid && this.data.info =="add") {
  
        this.ob_add = this.service.addSubject(this.Reactiveform.value).subscribe((response) =>{ 
          this.DataResponse = response
  
          if (this.DataResponse.error){
             this.toastr.error(this.DataResponse.error, 'Error');
  
  
  
      }else if(this.DataResponse.Succ){
        this.toastr.success("Subject Successful Added", 'Success');
  
        this.dialogref.close("added");
  
      }
        });
  
      }else if(this.Reactiveform.valid && this.data.info =="update") {
        this.ob_add = this.service.updateSubject(this.data.id,this.Reactiveform.value).subscribe((response) =>{ 
          this.DataResponse = response
  
          if (this.DataResponse.error){
             this.toastr.error(this.DataResponse.error, 'Error');
  
          }else if(this.DataResponse.Succ){
            this.toastr.success("Subject Successful Updated", 'Success');
            this.dialogref.close("update");
  
          }
        });
      }
    }
}
