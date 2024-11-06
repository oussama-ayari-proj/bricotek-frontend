import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomePageAdminComponent} from "./Admin_Pages/home-page-admin/home-page-admin.component";
import {HomePageUserComponent} from "./User_Pages/home-page-user/home-page-user.component";

const routes: Routes = [
  { path: '' ,component: LoginComponent },
  { path: 'admin-home' ,component:HomePageAdminComponent},
  {path: 'user-home'  ,component: HomePageUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
