import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-showshedule',
  templateUrl: './showshedule.component.html',
  styleUrls: ['./showshedule.component.css']
})
export class ShowsheduleComponent {
  idshedule= "" ;
  sheduledata : any  ;
  constructor(private route:ActivatedRoute , private service : AuthserviceService) {
    this.route.params.subscribe((data)=>{
     
      this.idshedule = data['id'] ;

    })

    this.service.getoneschedule(this.idshedule).subscribe((result)=>{
      this.sheduledata = result ; 
      console.log( this.sheduledata.Succ.ClassName );
    })

    
  }

}
