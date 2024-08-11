import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentModel } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url: string = "http://localhost:3000/students/";

  constructor(
    private http: HttpClient) {
  }

  viewAllStudent(): Observable<any> {

    return this.http.get(this.url)

  }

  createStudent(student: StudentModel): Observable<StudentModel> {
    return this.http.post<StudentModel>(this.url, student);
  }

  deleteStudent(studentId: string): Observable<void> {
    return this.http.delete<void>(`${this.url}${studentId}`);

  }

}  
