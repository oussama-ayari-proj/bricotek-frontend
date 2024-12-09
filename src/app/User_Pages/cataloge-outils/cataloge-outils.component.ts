import {Component, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-cataloge-outils',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './cataloge-outils.component.html',
  styleUrl: './cataloge-outils.component.scss'
})
export class CatalogeOutilsComponent implements OnInit{
  isconnected=false;

  ngOnInit() {
    this.isconnected=sessionStorage.getItem('token')!=null;

  }
}
