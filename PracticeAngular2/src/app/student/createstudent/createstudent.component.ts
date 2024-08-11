import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { LocationService } from '../../location.service';
import { Location } from '../../location/location.model';
import { StudentModel } from '../student.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrl: './createstudent.component.css'
})
export class CreatestudentComponent implements OnInit {

  locations: Location[] = [];
  students: StudentModel[] = [];
  fv!: FormGroup;
  student: StudentModel = new StudentModel();


  constructor(
    private ss: StudentService,
    private ls: LocationService,
    private fb: FormBuilder,
    private r: Router
  ) {

  }
  ngOnInit(): void {
    this.loadLocation();

    this.fv=this.fb.group({
      name:[''],
      email:[''],
      cellNo:[''],
      location: this.fb.group({
        id: [undefined],
        name: [undefined,],
        city: [undefined],
        state: [undefined],
        photo: [undefined],
        availableUnits: [undefined],
        wifi: [undefined],
        laundry: [undefined]
      })

    })  

    this.fv.get('location')?.get('name')?.valueChanges.subscribe(name => {
      const selectedLocation = this.locations.find(loc => loc.name === name);
      if (selectedLocation) {
        this.fv.patchValue({ location: selectedLocation });
      }
    });


  }

  loadLocation() {
    this.ls.getLocationForStudent()
      .subscribe({
        next: res => {
          this.locations = res;
        },
        error: err => {
          console.log(err);
        }
      })
  }
  createStudent(){
    this.student.name=this.fv.value.name;
    this.student.email=this.fv.value.email;
    this.student.cellNo=this.fv.value.cellNo;
    this.student.location=this.fv.value.location;

    this.ss.createStudent(this.student)
      .subscribe({
        next: res=>
        {
          this.loadLocation();
          this.fv.reset();
          this.r.navigate(['student']);
        },
        error: err=>
        {
          console.log(err);
        }
      })
  }

}
