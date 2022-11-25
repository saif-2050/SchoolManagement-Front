import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from '../services/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  LogginIn : any ; 
  Role : any ; 
  constructor(private shared:AuthserviceService , private routes:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise((resolve, reject) => {
        this.LogginIn = this.shared.isLogginIn() ;
        this.Role = this.shared.getrole() ;
        console.log(this.LogginIn) ;
        if (this.LogginIn == "true" && this.Role == "admin" ){
          resolve(true)
         // this.routes.navigate(['/admin']) ;
        }else{
          resolve(false)
          this.routes.navigate(['/login']) ;
        }
        
       })
  }
}
