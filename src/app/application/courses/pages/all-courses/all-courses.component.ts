import { CoursesService } from './../../../shared/services';
import { CourseCategory, CourseLevel } from './../../../shared/models/course';
import { CourseDurationLimit, CoursesFilterParams } from './../../models';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/application/shared/models';
import { ActivatedRoute, Router } from '@angular/router';
import { QueryParamsHelperService } from 'src/app/core/services';
import { map, tap } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent implements OnInit, OnDestroy {
  public searchForm: FormGroup;
  public componentList: Course[] = [];
  private courses: Course[] = [];
  private subscriptions: Subscription[] = [];
  private searchSubscription: Subscription;
  private filterParams: CoursesFilterParams = new CoursesFilterParams();
  public courseCategoryEnum = CourseCategory;
  public courseLevelEnum = CourseLevel;
  public CourseDurationLimitEnum = CourseDurationLimit;
  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private queryParamsHelperService: QueryParamsHelperService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.subscribeToUrlParams();
    this.createSearchForm()
  }
  private createSearchForm() {
    this.searchForm = this.fb.group({
      searchText: [this.filterParams.searchText],
      courseDurationLimit: [Number(this.filterParams.courseDurationLimit)],
      category: [this.filterParams.category],
      courseLevel: [this.filterParams.courseLevel],
    });
    this.searchForm.valueChanges.subscribe(re => {
      this.filterParams = re;
      this.queryParamsHelperService.changeUrlParams(this.filterParams)
    })
  }
  private subscribeToUrlParams() {
    this.subscriptions.push(
      this.route.queryParams.subscribe(params => {
        Object.assign(this.filterParams, params);
        this.setComponentList();
      })
    );
  }

  private setComponentList() {
    this.searchSubscription?.unsubscribe();
    if (this.courses?.length > 0) {
      this.componentList = this.filterCourses(this.courses);
      return
    }
    this.searchSubscription = this.coursesService.getCourses().pipe(
      tap(courses => { this.courses = courses }),
      map(courses => this.filterCourses(courses)))
      .subscribe(courses => {
        this.componentList = courses;
      })
  }


  private filterCourses(courses: Course[]) {
    return courses.filter(course => {
      let existed: boolean = true
      if (this.filterParams.courseLevel) {
        existed = existed && course.CourseLevel === this.filterParams.courseLevel
      }
      if (this.filterParams.searchText) {
        existed = existed && course.CourseName.toLowerCase().includes(this.filterParams.searchText.toLowerCase());
      }
      if (this.filterParams.category) {
        existed = existed && course.CourseCategory === this.filterParams.category
      }
      if (this.filterParams.courseDurationLimit) {
        switch (Number(this.filterParams.courseDurationLimit)) {
          case CourseDurationLimit.lessThan2Hours: {
            existed = existed && course.CourseDuration < 2
            break;
          }
          case CourseDurationLimit.from2To10Hours: {
            existed = existed && course.CourseDuration >= 2 && course.CourseDuration <= 10
            break;
          }
          case CourseDurationLimit.morThan10Hours: {
            existed = existed && course.CourseDuration > 10
            break;
          }

        }
      }
      return existed;
    })
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s && s.unsubscribe());
    this.searchSubscription?.unsubscribe();
  }
}
