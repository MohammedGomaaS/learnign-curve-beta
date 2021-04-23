import { PaymentType, CoursesRequest } from './../../shared/models/';
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

  /**
   * this function silmulate calling  all courses api by using rxjs operator `of`
   * @returns
   */
  public getCourses(): Observable<Course[]> {
    return of(courses);
  }

  /**
   * this function get student requested courses and their payments then do mapping to get
   * the course details  (simulate calling api)
   * @returns
   */
  public getStudentsRequestedCourses(): Observable<Observable<Course>[]> {
    return of(this.getCoursesRequestesPayments(requests)).pipe(
      map(coursesPaymets => {
        return coursesPaymets.map((coursePaymets) => {
          return this.getCourse(coursePaymets.id).pipe(delay(1000), map(course => {
            if (!course) { return {} as Course }
            course.paymets = coursePaymets.PaymentTypes
            return course
          }))
        })
      })
    );
  }

  /**
   * this function simulate calling student requests api then mapping the data to get the course details
   * @param studentId
   * @returns
   */
  public getStudentCourses(studentId: number): Observable<Observable<Course>[]> {
    return of(requests.find(resuest => resuest.StudentId === studentId)).pipe(
      map(request => {
        return request.Courses.map(course => this.getCourse(course.CourseId).pipe(
          delay(1000),
          map(course => {
            if (!course) { return {} as Course }
            course.paymets = [request.PaymentType]
            return course
          })
        ))
      }));
  }

  /**
   * this function simulate calling course api
   * @param courseId
   * @returns
   */
  private getCourse(courseId: number): Observable<Course> {
    return of(courses.find(course => course.CourseId === courseId));
  }

  /**
   * this function get the payments way for all requested courses
   * @param coursesrequestes
   * @returns
   */
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
