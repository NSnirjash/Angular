
import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location/location.service';

import { subscribe } from 'node:diagnostics_channel';
import { Location } from '../location/location.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-location',
  templateUrl: './update-location.component.html',
  styleUrl: './update-location.component.css'
})
export class UpdateLocationComponent implements OnInit {

  id: string = "";
  location: Location = new Location();

  constructor(
    private locationService: LocationService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.location = new Location();
    this.id = this.route.snapshot.params['id'];
    this.locationService.getById(this.id)
      .subscribe({

        next: res => {
          this.location = res;
          console.log(res);
        },
        error: err => {
          console.log(err);
        }
      });
  }

  updateLocation() {
    this.locationService.updateLocation(this.id, this.location)
      .subscribe({
        next: res => {
          this.location = new Location();
          this.router.navigate(['location'])
        },
        error: err => {
          console.log(err);
        }
      });

  }

}
