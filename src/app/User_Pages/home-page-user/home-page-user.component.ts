import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home-page-user',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './home-page-user.component.html',
  styleUrl: './home-page-user.component.scss'
})
export class HomePageUserComponent {

}
