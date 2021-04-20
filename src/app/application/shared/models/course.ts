export enum CourseLevel {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Expert = 'Expert',
  AllLevels = ''
}
export enum CourseCategory {
  ITSoftware = 'IT & Software',
  FinanceAccounting = 'Finance & Accounting',
  Arabic = "Arabic",
  Islamic = "Islamic",
  Development = "Development",
  Math = "Math"
}
export interface Course {
  CourseId: number,
  CourseName: string,
  CoursePrice: number,
  AvailableSeats: number,
  CourseImg: string,
  CourseLevel: CourseLevel,
  CourseDuration: number,
  CourseCategory: CourseCategory;
}
