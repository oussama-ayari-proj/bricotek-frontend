import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomePageAdminComponent} from "./Admin_Pages/home-page-admin/home-page-admin.component";
import {HomePageUserComponent} from "./User_Pages/home-page-user/home-page-user.component";
import {AddUserComponent} from "./Admin_Pages/add-user/add-user.component";
import {AddToolComponent} from "./Admin_Pages/add-tool/add-tool.component";
import {AddPretComponent} from "./Admin_Pages/add-pret/add-pret.component";

const routes: Routes = [
  { path: '' ,component: LoginComponent },
  { path: 'admin-home' ,component:HomePageAdminComponent},
  {path: 'user-home'  ,component: HomePageUserComponent},
  {path: 'admin-add-user'  ,component: AddUserComponent},
  {path: 'admin-add-tool'  ,component: AddToolComponent},
  {path: 'admin-add-pret'  ,component: AddPretComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
