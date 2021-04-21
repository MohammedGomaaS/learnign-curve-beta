import { StudentService } from './services';
import { ProfileComponent } from './pages';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';

const components = [ProfileComponent];
const directives = [];
const pipes = [];
const pages = [ProfileComponent];
const services = [StudentService];

@NgModule({
  declarations: [UserComponent,...components,...directives,...pipes,...pages],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  providers:[...services]
})
export class UserModule { }
