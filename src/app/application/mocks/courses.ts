import { Course, CourseCategory, CourseLevel } from './../shared//models';
export let courses: Course[] = [
  {
    CourseId: 123,
    CourseName: "Course 1",
    CoursePrice: 123.5,
    AvailableSeats: 25,
    CourseImg: "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/6772890/600/400/m2/fpnw/wm0/9-.jpg?1564910091&s=cae782a267bc92f8a563993cb79de957",
    CourseLevel: CourseLevel.Beginner,
    CourseDuration: 40,
    CourseCategory: CourseCategory.ITSoftware
  },
  {
    CourseId: 124,
    CourseName: "Course 2",
    CoursePrice: 100.0,
    AvailableSeats: 0,
    CourseImg: "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/6772064/600/400/m2/fpnw/wm0/cover_final-.jpg?1564861998&s=db4ada75e555c84fb41eb00d277bc550",
    CourseLevel: CourseLevel.Intermediate,
    CourseDuration: 10,
    CourseCategory: CourseCategory.Math
  },
  {
    CourseId: 125,
    CourseName: "Course 3",
    CoursePrice: 250.5,
    AvailableSeats: 10,
    CourseImg: "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/6772891/600/400/m2/fpnw/wm0/4-.jpg?1564910090&s=6451e42ed96e83082a8c9b676ac937fe",
    CourseLevel: CourseLevel.Beginner,
    CourseDuration: 2,
    CourseCategory: CourseCategory.Math
  },
  {
    CourseId: 126,
    CourseName: "Course 4",
    CoursePrice: 124.9,
    AvailableSeats: 60,
    CourseImg: "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/6772888/600/400/m2/fpnw/wm0/6-2-.jpg?1564910090&s=1e59df2788175458b2f96752c3515382",
    CourseLevel: CourseLevel.Beginner,
    CourseDuration: 5,
    CourseCategory: CourseCategory.Math
  },
  {
    CourseId: 127,
    CourseName: "Course 5",
    CoursePrice: 253.2,
    AvailableSeats: 400,
    CourseImg: "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/6772889/600/400/m2/fpnw/wm0/1-.jpg?1564910090&s=d3eeeb3330542d8cacceced45390de20",
    CourseLevel: CourseLevel.Intermediate,
    CourseDuration: 10,
    CourseCategory: CourseCategory.Math
  },
  {
    CourseId: 128,
    CourseName: "Course 6",
    CoursePrice: 589.5,
    AvailableSeats: 20,
    CourseImg: "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/6772892/600/400/m2/fpnw/wm0/10-.jpg?1564910092&s=454b17c405530b2cae923fd188d07ae3",
    CourseLevel: CourseLevel.Intermediate,
    CourseDuration: 4,
    CourseCategory: CourseCategory.Development
  },
  {
    CourseId: 129,
    CourseName: "Course 7",
    CoursePrice: 20.2,
    AvailableSeats: 1200,
    CourseImg: "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/6772893/600/400/m2/fpnw/wm0/7-.jpg?1564910091&s=5e11287db667335cae6484c0c4934eff",
    CourseLevel: CourseLevel.Beginner,
    CourseDuration: 2,
    CourseCategory: CourseCategory.Development
  },
  {
    CourseId: 130,
    CourseName: "Course 8",
    CoursePrice: 30.5,
    AvailableSeats: 30,
    CourseImg: "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/6772894/600/400/m2/fpnw/wm0/2-.jpg?1564910092&s=3287af84ff71f302e154e0cd2ea39919",
    CourseLevel: CourseLevel.Beginner,
    CourseDuration: 10,
    CourseCategory: CourseCategory.Math
  },
  {
    CourseId: 131,
    CourseName: "Course 9",
    CoursePrice: 5.5,
    AvailableSeats: 5220,
    CourseImg: "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/6772895/600/400/m2/fpnw/wm0/8-.jpg?1564910092&s=ba4f372563d6da506095fa1807eb0be7",
    CourseLevel: CourseLevel.Intermediate,
    CourseDuration: 40,
    CourseCategory: CourseCategory.Islamic
  },
  {
    CourseId: 132,
    CourseName: "Course 10",
    CoursePrice: 20.5,
    AvailableSeats: 1000,
    CourseImg: "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/6772896/600/400/m2/fpnw/wm0/5-.jpg?1564910093&s=c7d0ab76d60551b9941416954556eb33",
    CourseLevel: CourseLevel.Beginner,
    CourseDuration: 12,
    CourseCategory: CourseCategory.Math
  },
  {
    CourseId: 133,
    CourseName: "Course 11",
    CoursePrice: 4.5,
    AvailableSeats: 24,
    CourseImg: "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/2150880/910/607/m1/fpnw/wm0/1-hardcover-1160x772-2-.jpg?1484772426&s=b2fdd41911081242d86c6abed845ebe9",
    CourseLevel: CourseLevel.Beginner,
    CourseDuration: 20,
    CourseCategory: CourseCategory.Arabic
  },
  {
    CourseId: 134,
    CourseName: "Course 12",
    CoursePrice: 20.0,
    AvailableSeats: 5,
    CourseImg: "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/3992409/910/607/m1/fpnw/wm0/4-.jpg?1518444576&s=377d1cb89931d61e7f5f40a2ef61d106",
    CourseLevel: CourseLevel.Expert,
    CourseDuration: 50,
    CourseCategory: CourseCategory.Math
  },
  {
    CourseId: 135,
    CourseName: "Course 13",
    CoursePrice: 25.2,
    AvailableSeats: 4,
    CourseImg: "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/3992408/910/607/m1/fpnw/wm0/3-.jpg?1518444576&s=d839998a6c75648343dcd5ed6557be6f",
    CourseLevel: CourseLevel.Beginner,
    CourseDuration: 4,
    CourseCategory: CourseCategory.Development
  },
  {
    CourseId: 136,
    CourseName: "Course 14",
    CoursePrice: 200.0,
    AvailableSeats: 2,
    CourseImg: "https://www.decolore.net/wp-content/uploads/2019/10/gravity-psd-book-mockup-hardcover-2.jpg",
    CourseLevel: CourseLevel.Intermediate,
    CourseDuration: 2,
    CourseCategory: CourseCategory.Math

  },
  {
    CourseId: 137,
    CourseName: "Course 15",
    CoursePrice: 30.0,
    AvailableSeats: 1,
    CourseImg: "https://www.decolore.net/wp-content/uploads/2019/10/free-hardcover-catalog-book-mockup-psd.jpg",
    CourseLevel: CourseLevel.Intermediate,
    CourseDuration: 2,
    CourseCategory: CourseCategory.Development
  },
  {
    CourseId: 138,
    CourseName: "Course 16",
    CoursePrice: 10.0,
    AvailableSeats: 1,
    CourseImg: "https://www.decolore.net/wp-content/uploads/2019/10/free-open-hardcover-book-mockup-psd.jpg",
    CourseLevel: CourseLevel.Beginner,
    CourseDuration: 5,
    CourseCategory: CourseCategory.ITSoftware

  }

]
