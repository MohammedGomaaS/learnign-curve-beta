import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryParamsHelperService } from './services';

import {
  AccessTokenInterceptor
} from './interceptors';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
const interceptors = [
  { provide: HTTP_INTERCEPTORS, useClass: AccessTokenInterceptor, multi: true }
]

const services = [QueryParamsHelperService]

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [...services, ...interceptors],
})
export class CoreModule { }
