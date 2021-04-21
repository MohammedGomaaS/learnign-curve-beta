import { TodoListComponent, RecentUpdatesComponent } from './components';
import { AllCoursesComponent, StudentsRequestedCoursesComponent } from './pages';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllCoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { SharedModule } from '../shared/shared.module';

const components = [RecentUpdatesComponent, TodoListComponent];
const directives = [];
const pipes = [];
const services = [];
const pages = [AllCoursesComponent, StudentsRequestedCoursesComponent];

@NgModule({
  declarations: [CoursesComponent, ...components, ...directives, ...pipes, ...pages],
  imports: [
    CommonModule,
    AllCoursesRoutingModule,
    SharedModule
  ],
  providers: [...services]
})
export class CoursesModule { }
