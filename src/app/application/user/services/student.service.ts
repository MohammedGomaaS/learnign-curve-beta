import { students } from './../../mocks/students';
import { Student } from './../../shared/models/';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable()
export class StudentService {
  constructor() { }
/**
 * this function simulate calling the student api "by using rxjs of operaor"
 * @param studentId
 * @returns
 */
  getStudent(studentId: number): Observable<Student> {
    return of(students.find(student => student.Id === studentId));
  }

}
