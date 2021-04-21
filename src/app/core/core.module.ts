import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryParamsHelperService } from './services';


const services = [QueryParamsHelperService]

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [...services],
})
export class CoreModule { }
