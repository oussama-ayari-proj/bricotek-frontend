import { Component } from '@angular/core';
import {MdbCheckboxModule} from "mdb-angular-ui-kit/checkbox";
import {MdbFormsModule} from "mdb-angular-ui-kit/forms";
import {MdbRippleModule} from "mdb-angular-ui-kit/ripple";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {UserService} from "../../../services/User/user.service";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    MdbCheckboxModule,
    MdbFormsModule,
    MdbRippleModule,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect,
    MatDatepickerToggle,
    MatDatepickerInput,
    MatIcon,
    MatDatepicker,
    MatHint
  ],
  templateUrl: './add-user.component.html',
  styleUrl: '../../login/login.component.scss'
})
export class AddUserComponent {
  form: FormGroup= new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    adresse: new FormControl(''),
    numTel: new FormControl(''),
    dateOfBirth: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl('')
  });
constructor(
  private router:Router,
  private userService:UserService
  ) {
}
  onSubmit() {
    this.userService.addUser(this.form.value).subscribe(
      {
        next:(res)=>{
          console.log(res)
        },
        error:(res)=>{
          console.log(res);
        }
      }
    )
  }
  roles= [
    {value: 'ADMIN', viewValue: 'Administrateur / Bénévole'},
    {value: 'USER', viewValue: 'Utilisateur / Habitant'},
  ];
  back() {
    this.router.navigateByUrl('/admin-home');
  }
}
