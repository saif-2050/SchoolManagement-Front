import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private auth:AuthserviceService , private toastr: ToastrService , private routes:Router) {
  }
  isNew : any 
  DataResponse :any 

  ngOnInit(): void {}

  login(f:any){
    let formdata = f.value 
    
    this.auth.login(formdata).subscribe((response) =>{ 
      //if(response){
        this.DataResponse = response
            
        if (this.DataResponse.error){
              // console.log(response);
               this.toastr.error(this.DataResponse.error, 'Error');


        }else if(this.DataResponse.Succ){

          //console.log(this.DataResponse.Succ);
          this.toastr.success("you are successfully logged in ", 'Welcome');
          this.auth.SaveData(this.DataResponse.Succ["token"],this.DataResponse.Succ["role"])
          this.isNew = this.auth.getMemberType() ;
          if(this.auth.getrole() == "admin"){
            this.routes.navigate(['/admin']); 

          }else if(this.auth.getrole() == "teacher"){
            if(this.isNew=="true"){
              this.routes.navigate(['/Reset_Password']);
  
            }else{
              this.routes.navigate(['/teacher']);
              //console.log("your are in dashboard") ;
  
            }
          }else if(this.auth.getrole() == "student"){
            if(this.isNew=="true"){
              this.routes.navigate(['/Reset_Password']);
  
            }else{
              this.routes.navigate(['/student']);
              //console.log("your are in dashboard") ;
  
            }
          }else{
            this.routes.navigate(['/login']);

          }
         
          // if role = admin redirect to page dashbord else take him to reset his password (only new members)
          // validation part login page and reset password page !!!!
          // add dashborad page and the route with guards 

        }
    });
    
  }
}
