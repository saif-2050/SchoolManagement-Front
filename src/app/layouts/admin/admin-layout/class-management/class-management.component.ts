import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { ClassdeletemodalComponent } from './classdeletemodal/classdeletemodal.component';
import { ClassmodalpopupComponent } from './classmodalpopup/classmodalpopup.component';

@Component({
  selector: 'app-class-management',
  templateUrl: './class-management.component.html',
  styleUrls: ['./class-management.component.css']
})
export class ClassManagementComponent implements OnInit  {
  displayedColumns: string[] = ['ClassName','Created', 'action'];
  dataSource :any ;
  data :any ;
  rel : any ;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private auth:AuthserviceService , private dialog: MatDialog){}
  ngOnInit(): void {
    this.getallclass();

  }

  getallclass(){
    this.auth.getallclass().subscribe(result=>{
      this.data = result ;
      this.dataSource = new MatTableDataSource(this.data) 
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

       })
  }

  Filterchange(event: Event) {
    const filvalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;
  }

  FunctionEdit(id: any){
    this.OpenDialog('1000ms','600ms',id)

  }

  FunctionAdd(){
    this.OpenDialogAdd('1000ms','600ms')

  }
  FunctionDelete(id: any) {
    
    const dialogRef = this.dialog.open(ClassdeletemodalComponent,{
      data:{
        message: 'Are you sure want to delete this Class ?',
        buttonText: {
          ok: 'Delete',
          cancel: 'No'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.auth.RemoveClass(id).subscribe(result  => {
        this.rel = result
        this.getallclass();
     });
      }
    });

  }

  OpenDialog(enteranimation: any, exitanimation: any,code:any) {

    this.dialog.open(ClassmodalpopupComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: "60%",
      data:{
        id:code,
        info:"update"
      }
    }).afterClosed().subscribe(val =>{
      if (val == "update"){
        this.getallclass();
      }
    })
  }

  OpenDialogAdd(enteranimation: any, exitanimation: any) {

    this.dialog.open(ClassmodalpopupComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: "60%",
      data:{
        id:"",
        info:"add"
      }
    }).afterClosed().subscribe(val =>{
      if (val == "added"){
        this.getallclass();
      }
    })
  }
}
