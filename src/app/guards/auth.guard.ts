import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from '../services/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isNew:any 
  LogginIn :any
  constructor(private shared:AuthserviceService , private routes:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise((resolve, reject) => {
        this.isNew = this.shared.getMemberType();
        this.LogginIn = this.shared.isLogginIn()
        if( this.isNew == "true" && this.LogginIn  == "true"){
         resolve(true)
        }else{
         resolve(false)
         this.routes.navigate(['/login']);
 
        }
     })
  }
  
}
