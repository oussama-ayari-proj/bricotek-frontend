import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomePageAdminComponent} from "./Admin_Pages/home-page-admin/home-page-admin.component";
import {HomePageUserComponent} from "./User_Pages/home-page-user/home-page-user.component";
import {AddUserComponent} from "./Admin_Pages/add-user/add-user.component";
import {AddToolComponent} from "./Admin_Pages/add-tool/add-tool.component";
import {AddPretComponent} from "./Admin_Pages/add-pret/add-pret.component";
import {CatalogeOutilsComponent} from "./User_Pages/cataloge-outils/cataloge-outils.component";
import {ModToolComponent} from "./Admin_Pages/mod-tool/mod-tool.component";

const routes: Routes = [
  { path: '' ,component: LoginComponent },
  { path: 'admin-home' ,component:HomePageAdminComponent},
  {path: 'home-page'  ,component: HomePageUserComponent},
  {path: 'admin-add-user'  ,component: AddUserComponent},
  {path: 'admin-add-tool'  ,component: AddToolComponent},
  {path: 'admin-add-pret'  ,component: AddPretComponent},
  {path: 'catalogue'  ,component: CatalogeOutilsComponent},
  {path: 'admin-mod-tool/:toolId',component:ModToolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
