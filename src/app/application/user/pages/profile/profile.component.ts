import { CoursesService } from './../../../shared/services';
import { Student, Course } from './../../../shared/models';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  studentId: number = 1235
  onStudent$: Observable<Student>;
  onStudentCourses$: Observable<Observable<Course>[]>
  constructor(
    private studentService: StudentService,
    private coursesService: CoursesService
  ) { }

  ngOnInit():void {
    this.setStudent();
    this.setStudentCourses();
  }

  private setStudent(): void {
    this.onStudent$ = this.studentService.getStudent(this.studentId)
  }

  private setStudentCourses(): void {
    this.onStudentCourses$ = this.coursesService.getStudentCourses(this.studentId)
  }

}
