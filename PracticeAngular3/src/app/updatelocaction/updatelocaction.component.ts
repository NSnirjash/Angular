import { Component, OnInit } from '@angular/core';
import { location } from '../location/location.model';
import { LocationService } from '../location.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-updatelocaction',
  templateUrl: './updatelocaction.component.html',
  styleUrl: './updatelocaction.component.css'
})
export class UpdatelocactionComponent implements OnInit {

  id: string = "";
  location: location = new location();

  constructor(
    private ls: LocationService,
    private r: Router,
    private ar: ActivatedRoute
  ) {

  }

  ngOnInit(): void {

    this.location = new location();
    this.id = this.ar.snapshot.params['id'];
    this.ls.getById(this.id)
      .subscribe({
        next: res=>
        {
          this.location=res;
          console.log(res);
        },
        error: err=>
        {
          console.log(err);
        }
      })
  }
  updateData(){
    this.ls.editLocation(this.id, this.location)
      .subscribe({
        next: res=>{
          this.location=new location()
          this.r.navigate(['location'])
        },
        error: err=>{
          console.log(err);
        }
      })
  }

}
