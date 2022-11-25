import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from '../services/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class CheckAuthGuard implements CanActivate {
  constructor(private shared:AuthserviceService , private routes:Router){}
  isNew:any 
  LogginIn :any
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise((resolve, reject) => {
        this.isNew = this.shared.getMemberType();
        this.LogginIn = this.shared.isLogginIn()
        if( this.isNew == "false" && this.LogginIn  == "true"){
         resolve(true)
        }else if(this.isNew == "true" && this.LogginIn  == "true") {
         resolve(false)
         this.routes.navigate(['/Reset_Password']);
 
        }else{
          resolve(false)
          this.routes.navigate(['/login']);

        }
     })
  }
}
