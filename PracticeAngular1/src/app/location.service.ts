import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from './location/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  baseUrl:string="http://localhost:3000/locations"
  constructor(private httpClient:HttpClient) { 

  }

  getAllLocation(): Observable<any>{
    return this.httpClient.get(this.baseUrl)

  }

  creatLocation(location: Location){
    return this.httpClient.post(this.baseUrl, location)
  }
}
