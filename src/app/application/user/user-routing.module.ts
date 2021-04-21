import { ProfileComponent } from './pages';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';

const routes: Routes = [
{
  path: '', component: UserComponent,
  children: [
    {
      path: '',
      redirectTo: 'profile',
      pathMatch: 'full'
    },
    {
      path: 'profile', component: ProfileComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
