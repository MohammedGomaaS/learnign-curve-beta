import { PaymentType, CoursesRequest } from './../../shared/models/requested-courses';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators'
import { courses, requests } from '../../mocks';
import { Course } from '../../shared/models';

interface CoursesPayments {
  id: number, PaymentTypes: PaymentType[]
}
@Injectable()
export class CoursesService {
  constructor() { }
  public getCourses(): Observable<Course[]> {
    return of(courses);
  }
  public getStudentsRequestedCourses(): Observable<Observable<Course>[]> {
    return of(this.getCoursesRequestesPayments(requests)).pipe(map(coursesPaymets => {
      return coursesPaymets.map((coursePaymets) => {
        return this.getCourseById(coursePaymets.id).pipe(delay(2000),map(course => {
          if(!course){return {} as Course}
          course.paymets = coursePaymets.PaymentTypes
          return course
        }))
      })
    }));
  }

  private getCourseById(courseId: number): Observable<Course> {
    return of(courses.find(course => course.CourseId === courseId));
  }

  private getCoursesRequestesPayments(coursesrequestes: CoursesRequest[]): CoursesPayments[] {
    let coursesPayments: CoursesPayments[] = [];
    coursesrequestes.forEach(request => {
      request.Courses.forEach(studentRequestedCourse => {
        const coursePayments: CoursesPayments = coursesPayments.find(course => studentRequestedCourse.CourseId === course.id)
        if (!coursePayments) {
          coursesPayments.push({ id: studentRequestedCourse.CourseId, PaymentTypes: [request.PaymentType] });
        } else if (!coursePayments.PaymentTypes.some(paymentType => paymentType === request.PaymentType)) {
          coursePayments.PaymentTypes.push(request.PaymentType);
        }
      })
    });
    return coursesPayments;
  }
}
