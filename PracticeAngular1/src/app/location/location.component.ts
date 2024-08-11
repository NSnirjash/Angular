import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent implements OnInit{
  location: any;

  constructor(
    private locationService : LocationService,
   private router: Router,
   private httpClient: HttpClient           
  ){

  }
  ngOnInit(): void {
    this.location= this.locationService.getAllLocation();
  }



}
