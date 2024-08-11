import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { location } from '../location/location.model';
import { error } from 'console';

@Component({
  selector: 'app-createlocation',
  templateUrl: './createlocation.component.html',
  styleUrl: './createlocation.component.css'
})
export class CreatelocationComponent implements OnInit {


  location: location = new location();
  formValue !: FormGroup;
  locationData: any
  constructor(
    private ls: LocationService,
    private r: Router,
    private http: HttpClient,
    private fb: FormBuilder
  ) {

  }
  ngOnInit(): void {
    this.formValue = this.fb.group({
      id :[''],
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
    this.location.name=this.formValue.value.name;
    this.location.city=this.formValue.value.city;
    this.location.state=this.formValue.value.state;
    this.location.photo=this.formValue.value.photo;
    this.location.availableUnits=this.formValue.value.availableUnits;
    this.location.wifi=this.formValue.value.wifi;
    this.location.laundry=this.formValue.value.laundry;

    this.ls.createLocation(this.location)
      .subscribe({
        next: res=>
        {
          console.log(res);
          this.formValue.reset();
          this.r.navigate(['/location']);
        },
        error: error=>
        {
          console.log(error)
        }
      })

  }
}
