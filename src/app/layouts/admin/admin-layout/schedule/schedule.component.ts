import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthserviceService } from 'src/app/services/authservice.service';

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
  constructor(private auth:AuthserviceService ){}
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
  FunctionDelete(id: any){
    

  }
}