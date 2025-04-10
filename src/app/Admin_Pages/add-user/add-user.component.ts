import {Component, inject, OnInit, signal} from '@angular/core';
import {MdbCheckboxModule} from "mdb-angular-ui-kit/checkbox";
import {MdbFormsModule} from "mdb-angular-ui-kit/forms";
import {MdbRippleModule} from "mdb-angular-ui-kit/ripple";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {UserService} from "../../../services/User/user.service";
import {MatDatepicker, MatDatepickerInput, MatDatepickerIntl, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatIcon} from "@angular/material/icon";
import {MatCheckbox} from "@angular/material/checkbox";
import {DateAdapter, MAT_DATE_LOCALE} from "@angular/material/core";

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
    MatHint,
    MatCheckbox
  ],
  templateUrl: './add-user.component.html',
  styleUrl: '../../login/login.component.scss'
})
export class AddUserComponent implements OnInit{
  form: FormGroup= new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    adresse: new FormControl(''),
    numTel: new FormControl(''),
    dateAdh: new FormControl(''),
    dateFinAdh: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl(''),
    cotisation:new FormControl(false)
  });
constructor(
  private router:Router,
  private userService:UserService
  ) {
}
  onSubmit() {
    const currentYear = new Date().getFullYear();
    const endOfYear = new Date(currentYear, 11, 31);

    const formattedDate = endOfYear.toISOString().split('T')[0];

    this.form.get('dateFinAdh')?.setValue(formattedDate);
    console.log(this.form.value)
    this.userService.addUser(this.form.value).subscribe(
      {
        next:(res)=>{
          console.log(res);
          this.router.navigateByUrl('/admin-home');
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


  ngOnInit(): void {

  }
}
