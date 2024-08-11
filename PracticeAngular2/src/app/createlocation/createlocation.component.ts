import { Component, OnInit } from '@angular/core';
import { Location } from '../location/location.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocationService } from '../location.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';

@Component({
  selector: 'app-createlocation',
  templateUrl: './createlocation.component.html',
  styleUrl: './createlocation.component.css'
})
export class CreatelocationComponent implements OnInit {


  location: Location = new Location();
  info !: FormGroup;
  ld: any;

  constructor(
    private ls: LocationService,
    private r: Router,
    private link: HttpClient,
    private fb: FormBuilder
  ) {

  }




  ngOnInit(): void {
    this.info = this.fb.group({
      id: [''],
      name: [''],
      city: [''],
      state: [''],
      photo: [''],
      availableUnits: [''],
      wifi: [false],
      laundry: [false]
    })
  }


  createLocation(){
    this.location.name=this.info.value.name;
    this.location.city=this.info.value.city;
    this.location.state=this.info.value.state;
    this.location.photo=this.info.value.photo;
    this.location.availableUnits=this.info.value.availableUnits;
    this.location.wifi=this.info.value.wifi;
    this.location.laundry=this.info.value.laundry;

    this.ls.insertLocation(this.location)
      .subscribe({
        next: res=>
        {
          console.log(res);
          this.info.reset();
          this.r.navigate(['/location']);
        },
        error:error=>
        {
          console.log(error)
        }
      })
  }

}
