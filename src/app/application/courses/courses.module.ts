import { AllCoursesComponent } from './pages';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllCoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { SharedModule } from '../shared/shared.module';
import { CoursesService } from './services';
import { FormsModule } from '@angular/forms';

const components = [];
const directives = [];
const pipes = [];
const services = [CoursesService];
const pages = [AllCoursesComponent];

@NgModule({
  declarations: [CoursesComponent, ...components, ...directives, ...pipes, pages],
  imports: [
    CommonModule,
    AllCoursesRoutingModule,
    SharedModule
  ],
  providers: [...services]
})
export class CoursesModule { }
