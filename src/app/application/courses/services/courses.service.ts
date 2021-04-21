import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { courses } from '../../mocks/courses';
import { Course } from '../../shared/models';
@Injectable()
export class CoursesService {

  constructor() { }


  public getCourses(): Observable<Course[]> {
    return of(courses);
  }
}
