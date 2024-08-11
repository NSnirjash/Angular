import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { error } from 'node:console';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent implements OnInit {
  location: any;


  constructor(
    private ls: LocationService,
    private r: Router,
    private http: HttpClient
  ) {

  }
  ngOnInit(): void {
    this.location = this.ls.getAllLocation();
  }

  deleteData(id: string){
    this.ls.deletelocation(id)
      .subscribe({
        next: res=>
        {
          this.location = this.ls.getAllLocation();
          this.r.navigate(['/location']);
        },
        error: error=>
        {

        }
      })
  }

  updateLocation(id: string){
    this.r.navigate(['updateData',id])
  }

}
