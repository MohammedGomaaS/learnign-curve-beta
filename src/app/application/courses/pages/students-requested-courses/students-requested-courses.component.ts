import { Course } from './../../../shared/models/course';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoursesService } from '../../services';

@Component({
  selector: 'app-students-requested-courses',
  templateUrl: './students-requested-courses.component.html',
  styleUrls: ['./students-requested-courses.component.css']
})
export class StudentsRequestedCoursesComponent implements OnInit {
  public onComponentList$: Observable<Observable<Course>[]>;
  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.getComponentList();
  }
  private getComponentList() {
    this.onComponentList$ = this.coursesService.getStudentsRequestedCourses();
  }
}
