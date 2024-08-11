import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { location } from './location/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  url: string = "http://localhost:3000/locations"
  constructor(private http: HttpClient) {

  }

  getAllLocation(): Observable<any> {
    return this.http.get(this.url);

  }

  createLocation(location: location) {
    return this.http.post(this.url, location);
  }

  deletelocation(id: string): Observable<any> {
    return this.http.delete(this.url + "/" + id)
  }

  editLocation(id: string, location: location): Observable<any> {

    return this.http.put(this.url + "/" + id, location)

  }

  getById(id: string): Observable <any> {

    return this.http.get(this.url + "/" + id)

  }

}


