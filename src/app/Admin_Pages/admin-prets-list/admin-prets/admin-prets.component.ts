import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef
} from "@angular/material/table";
import {NgIf} from "@angular/common";
import {MdbRippleModule} from "mdb-angular-ui-kit/ripple";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-prets',
  standalone: true,
  imports: [
    MdbRippleModule

  ],
  templateUrl: './admin-prets.component.html',
  styleUrl: '../../admin-user-list/admin-user-list.component.scss'
})
export class AdminPretsComponent {
  constructor(private route:Router) {
  }
  add() {
    this.route.navigateByUrl('admin-add-pret')
  }
}
