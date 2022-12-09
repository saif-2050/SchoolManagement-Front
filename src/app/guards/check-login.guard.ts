import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from '../services/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {
  LogginIn : any ;
  role : any ; 
  constructor(private shared:AuthserviceService , private routes:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise((resolve, reject) => {
        this.LogginIn = this.shared.isLogginIn() ; 
        this.role = this.shared.getrole();

         if(  this.LogginIn  == "true"){
           if(this.role == "admin"){
              this.routes.navigate(['/admin']);
           } 
           if(this.role ==  "student"){
            this.routes.navigate(['/student']);
           }
           if(this.role ==  "teacher"){
            this.routes.navigate(['/teacher']);
           }
          resolve(false)
        }else{
          resolve(true)
        } 
     })
  }
  
}
