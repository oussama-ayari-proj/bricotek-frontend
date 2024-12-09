import { Component } from '@angular/core';
import {MdbCheckboxModule} from "mdb-angular-ui-kit/checkbox";
import {MdbFormsModule} from "mdb-angular-ui-kit/forms";
import {MdbRippleModule} from "mdb-angular-ui-kit/ripple";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Location} from "@angular/common";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-tool',
  standalone: true,
  imports: [
    MdbCheckboxModule,
    MdbFormsModule,
    MdbRippleModule,
    ReactiveFormsModule,
    MatFormField,
    MatSelect,
    MatOption,
    MatLabel,
    MatInput
  ],
  templateUrl: './add-tool.component.html',
  styleUrl: '../../login/login.component.scss'
})
export class AddToolComponent {
constructor(private router:Router) {
}

  back() {
    this.router.navigateByUrl('/admin-home');
  }
  foods= [
    {value: 'steak-0', viewValue: 'Cat1'},
    {value: 'pizza-1', viewValue: 'Cat1'},
    {value: 'tacos-2', viewValue: 'Cat1'},
  ];
}
