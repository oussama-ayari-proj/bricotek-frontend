import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef
} from "@angular/material/table";
import {NgFor, NgIf} from "@angular/common";
import {MdbRippleModule} from "mdb-angular-ui-kit/ripple";
import {Router} from "@angular/router";
import {PretService} from "../../../../services/Pret/pret.service";

@Component({
  selector: 'app-admin-prets',
  standalone: true,
  imports: [
    MdbRippleModule,
    NgIf,
    NgFor
  ],
  templateUrl: './admin-prets.component.html',
  styleUrl: '../../admin-user-list/admin-user-list.component.scss'
})
export class AdminPretsComponent implements OnInit{
  constructor(
    private route:Router,
    private pretService:PretService
  ) {
  }
  add() {
    this.route.navigateByUrl('admin-add-pret')
  }

  ngOnInit(): void {
    this.loadData()
  }
  list=[]
  private loadData() {
    this.pretService.getAll().subscribe((res)=>{
      this.list=res as [];
    })
  }
}
