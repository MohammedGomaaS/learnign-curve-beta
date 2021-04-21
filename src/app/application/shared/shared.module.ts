import { CourseComponent } from './components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [CourseComponent];
const directives = [];
const pipes = [];
const services = [];

@NgModule({
  declarations: [...components, ...directives, ...pipes],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [...services],
  exports: [ReactiveFormsModule,...components, ...directives, ...pipes]
})
export class SharedModule { }
