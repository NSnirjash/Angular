import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent implements OnInit {
  location: any;


  constructor(
    private ls: LocationService,
    private router: Router,
    private http: HttpClient
  ) {

  }


  ngOnInit(): void {
    this.location = this.ls.getAllLocation();
  }

  deletelocation(id: string) {
    this.ls.deleteData(id)
      .subscribe({
        next: res => {
          this.location = this.ls.getAllLocation();
          this.router.navigate(['/location']);
        },
        error: error => {
          console.log(error);
        }


      })

  }

  updateData(id: string){
    this.router.navigate(['updateLocation', id])
  }
}