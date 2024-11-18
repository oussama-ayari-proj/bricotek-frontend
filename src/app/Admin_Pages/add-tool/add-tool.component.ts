import { Component } from '@angular/core';
import {MdbCheckboxModule} from "mdb-angular-ui-kit/checkbox";
import {MdbFormsModule} from "mdb-angular-ui-kit/forms";
import {MdbRippleModule} from "mdb-angular-ui-kit/ripple";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Location} from "@angular/common";

@Component({
  selector: 'app-add-tool',
  standalone: true,
  imports: [
    MdbCheckboxModule,
    MdbFormsModule,
    MdbRippleModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-tool.component.html',
  styleUrl: '../../login/login.component.scss'
})
export class AddToolComponent {
  form: FormGroup;
constructor(private location:Location) {
}
  onSubmit() {

  }

  back() {
    this.location.back()
  }
}
