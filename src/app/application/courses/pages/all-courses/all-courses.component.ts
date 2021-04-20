import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/application/shared/models';
import { CoursesService } from '../../services';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent implements OnInit, OnDestroy {
  componentList: Course[] = [];
  subscriptions: Subscription[] = [];
  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.getComponentList();
  }

  getComponentList() {
    this.subscriptions.push(this.coursesService.getCourses().subscribe(courses => {
      this.componentList = courses;
    }))
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s && s.unsubscribe())
  }
}
