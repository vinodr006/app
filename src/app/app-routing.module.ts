import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
const routes: Routes = [
  {
    path:'', redirectTo: 'menu',pathMatch:'full'
  },
  {
    path: 'users',
    component:UsersComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'home',
    component: UserdetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
