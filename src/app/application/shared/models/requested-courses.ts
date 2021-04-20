export enum PaymentType {
  Cash = 'Cash',
  Online = 'online'
}
export interface RequestedCourses {
  StudentId: number,
  RequestDate: Date,
  TeacherID: string,
  Courses: {
    CourseId: number,
    Members: number
  }[],
  PaymentType: PaymentType
}
