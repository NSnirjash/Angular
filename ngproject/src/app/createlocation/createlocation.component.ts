import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location/location.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '../location/location.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { error } from 'node:console';

@Component({
  selector: 'app-createlocation',
  templateUrl: './createlocation.component.html',
  styleUrl: './createlocation.component.css'
})
export class CreatelocationComponent implements OnInit {

  location: Location = new Location();
<<<<<<< HEAD
  formValue !: FormGroup
  locationData: any

=======
  formValue !: FormGroup;
  locationData: any;
>>>>>>> 16299edc7024596c25e0e17217cf58e0de6aacc9

  constructor(
    private locationService: LocationService,
    private router: Router,
<<<<<<< HEAD
    private httpClient: HttpClient,
=======
    private httpCllient: HttpClient,
>>>>>>> 16299edc7024596c25e0e17217cf58e0de6aacc9
    private formBuilder: FormBuilder
  ) {

  }
  ngOnInit(): void {
<<<<<<< HEAD
    this.formValue=this.formBuilder.group({
      name:[''],
      city:[''],
      state:[''],
      photo:[''],
      availableUnits:[''],
      wifi:[''],
      laundry:['']
    })
    
  }

  createLocation(){

    this.location.name=this.formValue.value.name;
    this.location.city=this.formValue.value.city;
    this.location.state=this.formValue.value.state;
    this.location.photo=this.formValue.value.photo;
    this.location.availableUnits=this.formValue.value.availableUnits;
    this.location.wifi=this.formValue.value.wifi;
    this.location.laundry=this.formValue.value.laundry;

    this.locationService.createLocation(this.location)
    .subscribe(
      res=>{
        console.log(res);
        this.formValue.reset();
      },
      error=>{
        console.log(error);
      }

    )

=======
    this.formValue = this.formBuilder.group({
      name: [''],
      city: [''],
      state: [''],
      photo: [''],
      availableUnits: [''],
      wifi: [false],
      laundry: [false]
    })
  }

  creatLocation() {
    this.location.name = this.formValue.value.name;
    this.location.city = this.formValue.value.city;
    this.location.state = this.formValue.value.state;
    this.location.photo = this.formValue.value.photo;
    this.location.availableUnits = this.formValue.value.availableUnits;
    this.location.wifi = this.formValue.value.wifi;
    this.location.laundry = this.formValue.value.laundry;

    this.locationService.creatLocation(this.location)
      .subscribe({

        next: res => {
          console.log(res);
          this.formValue.reset();
          this.router.navigate(['/location']);

        },
        error: error => {
          console.log(error)
        }
      })
>>>>>>> 16299edc7024596c25e0e17217cf58e0de6aacc9
  }


}
