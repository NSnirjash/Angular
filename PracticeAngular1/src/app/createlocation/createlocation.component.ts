import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '../location/location.model';
import { error } from 'console';

@Component({
  selector: 'app-createlocation',
  templateUrl: './createlocation.component.html',
  styleUrl: './createlocation.component.css'
})
export class CreatelocationComponent implements OnInit{

  location: Location = new Location();
  fv !: FormGroup;
  ld: any;

  constructor(
    private ls: LocationService,
    private r: Router,
    private http: HttpClient,
    private fb: FormBuilder
  ) {

  }
  ngOnInit(): void {
    this.fv=this.fb.group({
      id:[''],
      name:[''],
      city:[''],
      state:[''],
      photo:[''],
      availableUnits:[''],
      wifi:[false],
      laundry:[false]
    });

  }

  createLocation(){
    this.location.name=this.fv.value.name;
    this.location.city=this.fv.value.city;
    this.location.state=this.fv.value.state;
    this.location.photo=this.fv.value.photo;
    this.location.availableUnits=this.fv.value.availableUnits;
    this.location.wifi=this.fv.value.wifi;
    this.location.laundry=this.fv.value.laundry;

    this.ls.creatLocation(this.location)
      .subscribe({
        next: res=>
        {
          console.log(res);
          this.fv.reset();
        },
        error: error=>
        {
          console.log(error)
        }
      })

  }


  
}
