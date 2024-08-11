import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Location } from './location/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  baseUrl: string = "http://localhost:3000/locations/"
  constructor(private http: HttpClient) {

  }

  getAllLocation(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getLocationForStudent(): Observable<Location[]>{
    return this.http.get<Location[]>(this.baseUrl)
      .pipe(
        catchError(this.handleError)
      )
  }

  private handleError(error: Observable<any>){
    console.error('An error occurred:',error);
    return throwError(()=>new Error('test'));
  }

  insertLocation(location: Location) {
    return this.http.post(this.baseUrl, location)
  }

  deleteData(id: string): Observable<any> {
    return this.http.delete(this.baseUrl+"/"+id);
  }

  editLocation(id: string, location: Location):Observable<any>{
    return this.http.put(this.baseUrl+"/"+id, location);
  }

  getById(id: string): Observable<any>{
    return this.http.get(this.baseUrl+"/"+id);
  }
}
