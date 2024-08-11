import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { LocationService } from '../../location.service';
import { forkJoin } from 'rxjs';
import { StudentModel } from '../student.model';
import { Location } from '../../location/location.model';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrl: './viewstudent.component.css'
})
export class ViewstudentComponent implements OnInit{

  students: StudentModel[] = [];
  locations: Location[] = []; 

  constructor(
    private ls: LocationService,
    private ss: StudentService
  ){
    
  }
  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    forkJoin({
      locations: this.ls.getLocationForStudent(),
      students: this.ss.viewAllStudent()
    }).subscribe({
      next: ({ locations, students }) => {
        this.locations = locations;
        this.students = students;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  deleteStudent(studentId: string): void {
    this.ss.deleteStudent(studentId).subscribe({
      next: res => {
        this.loadData(); // Refresh the list after deletion
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
