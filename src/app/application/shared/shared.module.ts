import { CoursesService } from './services';
import { CourseComponent } from './components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {IvyCarouselModule} from 'angular-responsive-carousel';

const components = [CourseComponent];
const directives = [];
const pipes = [];
const services = [CoursesService];

@NgModule({
  declarations: [...components, ...directives, ...pipes],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IvyCarouselModule
  ],
  providers: [...services],
  exports: [ReactiveFormsModule, ...components, ...directives, ...pipes, IvyCarouselModule]
})
export class SharedModule { }
