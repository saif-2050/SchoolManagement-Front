import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { DeletepopupComponent } from '../deletepopup/deletepopup.component';
import { ModalpopupComponent } from '../modalpopup/modalpopup.component';

@Component({
  selector: 'frontend-students-management',
  templateUrl: './students-management.component.html',
  styleUrls: ['./students-management.component.css'],
})
export class StudentsManagementComponent implements OnInit {

  displayedColumns: string[] = ['cin', 'Name', 'Email', 'isNew' , 'action'];
  dataSource :any ;
  data :any ;
  rel : any ;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private auth:AuthserviceService , private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getallstudents();
  }
  getallstudents(){
    this.auth.getstudents().subscribe(result=>{
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
    const dialogRef = this.dialog.open(DeletepopupComponent,{
      data:{
        message: 'Are you sure want to delete this student ?',
        buttonText: {
          ok: 'Delete',
          cancel: 'No'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.auth.RemoveStudent(id).subscribe(result  => {
        this.rel = result
        this.getallstudents();
     });
      }
    });

  
    
  }

  OpenDialog(enteranimation: any, exitanimation: any,code:any) {

    this.dialog.open(ModalpopupComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: "60%",
      data:{
        id:code,
        info:"update"
      }
    }).afterClosed().subscribe(val =>{
      if (val == "update"){
        this.getallstudents();
      }
    })
  }

  OpenDialogAdd(enteranimation: any, exitanimation: any) {

    this.dialog.open(ModalpopupComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: "60%",
      data:{
        id:"",
        info:"add"
      }
    }).afterClosed().subscribe(val =>{
      if (val == "added"){
        this.getallstudents();
      }
    })
  }
 
  


  
}
