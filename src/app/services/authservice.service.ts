import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt' ;
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {


  helper = new JwtHelperService()
  constructor(private http: HttpClient) { }

  SetNewPassword(data:any){
    return this.http.post('http://localhost:9000/SetPassword',data)
  }
  login(data:any){
    return this.http.post('http://localhost:9000/login',data)
  }

  getstudents(){
    return this.http.get('http://localhost:9000/etudiants')
  }
  
  getonestudent(id:any){
    return this.http.get('http://localhost:9000/getstudent/'+id)
  }
  addstudent(data:any){
    return this.http.post('http://localhost:9000/add_etudiant',data)

  }
  RemoveStudent(id:any){
    return this.http.delete('http://localhost:9000/delete_student/'+id);
  }

  updateStudent(id:any , data:any){
    return this.http.put('http://localhost:9000/update_student/'+id,data);
  }
  SaveData(token: any , role: any ){
    localStorage.setItem('token',token) ; 
    localStorage.setItem('role',role);
    localStorage.setItem('LogginIn',"true");
  }

  getname(){
    let token :any = localStorage.getItem('token') ;
    if(token!=null){
      let decode = this.helper.decodeToken(token) ;
      return decode.name 
    }else{
      return "false" 
    }
    
  }
  getMemberType(){
    let token :any = localStorage.getItem('token') ;
    if(token!=null){
      let decode = this.helper.decodeToken(token) ;
      if(decode.new == "true"){
        return "true"
      }else{
        return "false"
      }
  }else{
        return "false"    
    }
}

  getrole(){
    let role :any = localStorage.getItem('role') ;
      if (role != null){
          return role ;
      }else{
          return "false" ; 
      }
  }

  isLogginIn(){
    let LogginIn :any = localStorage.getItem('LogginIn') ;
    if (LogginIn == "true"){
        return "true" ;
    }else{
        return "false" ; 
    }
  }
  //teacher
  getteachers(){
    return this.http.get('http://localhost:9000/teachers')
  }
  getoneteacher(id:any){
    return this.http.get('http://localhost:9000/getteacher/'+id)
  }
  addteacher(data:any){
    return this.http.post('http://localhost:9000/add_teacher',data)

  }
  RemoveTeacher(id:any){
    return this.http.delete('http://localhost:9000/delete_teacher/'+id);
  } 
   updateTeacher(id:any , data:any){
    return this.http.put('http://localhost:9000/update_teacher/'+id,data);
  }

}
  
  
  
  
  
  

  