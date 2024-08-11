import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from './location.model';
<<<<<<< HEAD
=======

>>>>>>> 16299edc7024596c25e0e17217cf58e0de6aacc9

@Injectable({
  providedIn: 'root'
})
export class LocationService {


  baseUrl: string = "http://localhost:3000/locations";
  constructor(private httpClient: HttpClient) { }

  getAllLocation(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl);
  }


<<<<<<< HEAD
  createLocation(location:Location): Observable<any>{
    return this.httpClient.post(this.baseUrl,location);

  }
  
=======
  creatLocation(location: Location): Observable<any> {
    return this.httpClient.post(this.baseUrl, location)
  }

  deleteLocation(id: string): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/" + id);


  }

  updateLocation(id: string, location: Location): Observable<any> {
    return this.httpClient.put(this.baseUrl + "/" + id, location);

  }

  getById(id: string): Observable<any> {

    return this.httpClient.get(this.baseUrl + "/" + id);

  }

>>>>>>> 16299edc7024596c25e0e17217cf58e0de6aacc9
}
