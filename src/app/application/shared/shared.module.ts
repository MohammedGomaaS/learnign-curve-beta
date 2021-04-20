import { CourseComponent } from './components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const components = [CourseComponent];
const directives = [];
const pipes = [];
const services = [];

@NgModule({
  declarations: [...components, ...directives, ...pipes],
  imports: [
    CommonModule
  ],
  providers: [...services],
  exports: [...components, ...directives, ...pipes]
})
export class SharedModule { }
