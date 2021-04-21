import { CoursesService } from './../../../shared/services/courses.service';
import { Course } from './../../../shared/models/course';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-students-requested-courses',
  templateUrl: './students-requested-courses.component.html',
  styleUrls: ['./students-requested-courses.component.css']
})
export class StudentsRequestedCoursesComponent implements OnInit {
  public onComponentList$: Observable<Observable<Course>[]>;
  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.setComponentList();
  }
  private setComponentList() {
    this.onComponentList$ = this.coursesService.getStudentsRequestedCourses();
  }
}
