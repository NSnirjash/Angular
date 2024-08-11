import { Component, OnInit } from '@angular/core';
import { Location } from '../location/location.model';
import { LocationService } from '../location.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-updatelocation',
  templateUrl: './updatelocation.component.html',
  styleUrl: './updatelocation.component.css'
})
export class UpdatelocationComponent implements OnInit{
  
 id: string="";
 location: Location = new Location(); 

 constructor(
  private ls: LocationService,
  private r: Router,
  private ar: ActivatedRoute
 ){

 }
  
  
  ngOnInit(): void {
    this.location=new Location();
    this. id= this.ar.snapshot.params['id'];
    this.ls.getById(this.id)
      .subscribe({
        next: res=>
        {
          this.location = res;
          console.log(res);
        },
        error: error=>
        {
          console.log(error)
        }
      })
  }

  updateLocation(){
    this.ls.editLocation(this.id, this.location)
      .subscribe({
        next: res=>
        {
          this.location=new Location();
          this.r.navigate(['location']);
        },
        error: error=>
        {
          console.log(error);
        }
      })
  }

}
