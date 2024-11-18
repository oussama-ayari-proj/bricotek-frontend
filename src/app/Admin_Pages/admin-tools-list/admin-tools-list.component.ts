import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {MdbRippleModule} from "mdb-angular-ui-kit/ripple";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-tools-list',
  standalone: true,
  imports: [
    NgForOf,
    MdbRippleModule
  ],
  templateUrl: './admin-tools-list.component.html',
  styleUrl: '../admin-user-list/admin-user-list.component.scss'
})
export class AdminToolsListComponent {

  constructor(private router:Router) {
  }
  add() {
    this.router.navigateByUrl('admin-add-tool')
  }
}
