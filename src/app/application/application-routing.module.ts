import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application.component';

const routes: Routes = [{
  path: '',
  component: ApplicationComponent,
  children: [
    {
      path: '',
      redirectTo: 'courses',
      pathMatch: 'full'
    }, {
      path: 'courses',
      loadChildren: () => import('src/app/application/courses/courses.module').then(m => m.CoursesModule)
    }, {
      path: 'user',
      loadChildren: () => import('src/app/application/user/user.module').then(m => m.UserModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
