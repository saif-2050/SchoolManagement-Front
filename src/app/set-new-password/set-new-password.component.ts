import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-set-new-password',
  templateUrl: './set-new-password.component.html',
  styleUrls: ['./set-new-password.component.css']
})
export class SetNewPasswordComponent {
  constructor(private auth:AuthserviceService ,private toastr: ToastrService , private routes:Router) {}
  Pass : any ;
  Role : any ;
  DataResponse :any ;
  ngOnInit(): void {}

  setPassword(f:any){
    let info = {
       data : f.value ,
       token : localStorage.getItem('token') 
    }
     if (info.data.Password != info.data.Confirm){
      this.toastr.error("Password Not Match", 'Error');
     }else{
      //console.log(info)

      this.auth.SetNewPassword(info).subscribe((response) =>{
        
        this.DataResponse = response

        if (this.DataResponse.error){
          
           this.toastr.error(this.DataResponse.error, 'Error');


    }else if(this.DataResponse.Succ){

      //console.log(this.DataResponse.Succ);
      //this.toastr.success("you are successfully logged in ", 'Welcome');
      this.Role = this.auth.getrole()
     // console.log(this.Role)
      if(this.Role=="student"){
        this.toastr.success("Password successfully Updated", 'Updated');
        this.auth.RemoveData() ;
        this.routes.navigate(['/login']);
       

      }else if(this.Role=="teacher"){
        this.toastr.success("Password successfully Updated", 'Updated');
        this.auth.RemoveData() ;
        this.routes.navigate(['/login']);
      }else{
        this.routes.navigate(['/Dash']);
        console.log("your are in dashboard") ;
      }

      }
        
     // console.log(info)
     })
  }
  }
}
