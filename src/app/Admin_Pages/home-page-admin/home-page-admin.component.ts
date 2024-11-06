import { Component } from '@angular/core';
import {MatDrawer, MatDrawerContainer, MatSidenavModule} from "@angular/material/sidenav";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {AdminUserListComponent} from "../admin-user-list/admin-user-list.component";
import {AdminToolsListComponent} from "../admin-tools-list/admin-tools-list.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-home-page-admin',
  standalone: true,
  imports: [
    MatDrawerContainer,
    MatButton,
    MatDrawer,
    MatSidenavModule, MatButtonModule, AdminUserListComponent, AdminToolsListComponent, NgIf
  ],
  templateUrl: './home-page-admin.component.html',
  styleUrl: './home-page-admin.component.scss'
})
export class HomePageAdminComponent {
  content=[false,false]
  toogleContent(index){
    let n=this.content.length
    for(let i=0;i<n;i++){
      if(i!=index)
        this.content[i]=false;
    }
    this.content[index]=true;
  }
}
