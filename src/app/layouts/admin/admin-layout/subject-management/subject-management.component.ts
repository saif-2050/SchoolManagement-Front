import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { DeleesubjectmodalComponent } from './deleesubjectmodal/deleesubjectmodal.component';
import { SubjectmodalpopupComponent } from './subjectmodalpopup/subjectmodalpopup.component';

@Component({
  selector: 'app-subject-management',
  templateUrl: './subject-management.component.html',
  styleUrls: ['./subject-management.component.css']
})
export class SubjectManagementComponent {
  displayedColumns: string[] = ['SubjectName', 'action'];
  dataSource :any ;
  data :any ;
  rel : any ;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private auth:AuthserviceService , private dialog: MatDialog){}
  ngOnInit(): void {
    this.getallsubject();

  }

  getallsubject(){
    this.auth.getallsubject().subscribe(result=>{
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
    
    const dialogRef = this.dialog.open(DeleesubjectmodalComponent,{
      data:{
        message: 'Are you sure want to delete this Subject ?',
        buttonText: {
          ok: 'Delete',
          cancel: 'No'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.auth.RemoveSubject(id).subscribe(result  => {
        this.rel = result
        this.getallsubject();
     });
      }
    });

  }

  OpenDialog(enteranimation: any, exitanimation: any,code:any) {

    this.dialog.open(SubjectmodalpopupComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: "60%",
      data:{
        id:code,
        info:"update"
      }
    }).afterClosed().subscribe(val =>{
      if (val == "update"){
        this.getallsubject();
      }
    })
  }

  OpenDialogAdd(enteranimation: any, exitanimation: any) {

    this.dialog.open(SubjectmodalpopupComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: "60%",
      data:{
        id:"",
        info:"add"
      }
    }).afterClosed().subscribe(val =>{
      if (val == "added"){
        this.getallsubject();
      }
    })
  }
}
