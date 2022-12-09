import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { DeletesheduleComponent } from './deleteshedule/deleteshedule.component';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  displayedColumns: string[] = ['ClassName', 'Schedule Created','action'];
  dataSource :any ;
  data :any ;
  rel : any ;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private auth:AuthserviceService , private dialog: MatDialog){}
  ngOnInit(): void {
    this.getallschedule();

  }

  getallschedule(){
    this.auth.getallschedules().subscribe(result=>{
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
    

  }
  FunctionDelete(id: any) {
    
    const dialogRef = this.dialog.open(DeletesheduleComponent,{
      data:{
        message: 'Are you sure want to delete this Shedule ?',
        buttonText: {
          ok: 'Delete',
          cancel: 'No'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.auth.Removechedule(id).subscribe(result  => {
        this.rel = result
        this.getallschedule();
     });
      }
    });

  } 
}