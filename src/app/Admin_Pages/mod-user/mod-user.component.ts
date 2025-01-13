import {Component, inject, OnInit, signal} from '@angular/core';
import {MdbCheckboxModule} from "mdb-angular-ui-kit/checkbox";
import {MdbFormsModule} from "mdb-angular-ui-kit/forms";
import {MdbRippleModule} from "mdb-angular-ui-kit/ripple";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
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
  templateUrl: './mod-user.component.html',
  styleUrl: '../../login/login.component.scss'
})
export class ModUserComponent implements OnInit{
  form: FormGroup= new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    adresse: new FormControl(''),
    numTel: new FormControl(''),
    dateOfBirth: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl(''),
    cotisation:new FormControl(false)
  });
  constructor(
    private router:Router,
    private userService:UserService,
    private activatedRoute:ActivatedRoute
  ) {
  }
  onSubmit() {
    this.userService.modifyUser(this.id,this.form.value).subscribe(
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

  private readonly _adapter = inject<DateAdapter<unknown, unknown>>(DateAdapter);
  private readonly _intl = inject(MatDatepickerIntl);
  private readonly _locale = signal(inject<unknown>(MAT_DATE_LOCALE));
  id;
  user={};
  ngOnInit(): void {
    this._locale.set('fr');
    this._adapter.setLocale(this._locale());
    this.id = this.activatedRoute.snapshot.paramMap.get('userId');
    this.loadData(this.id);
  }

  private loadData(id) {
    this.userService.getUserById(id).subscribe((res)=>{
      this.user=res;
      this.form.patchValue({
        nom: this.user['nom'],
        prenom: this.user['prenom'],
        adresse: this.user['adresse'],
        numTel: this.user['numTel'],
        dateOfBirth: this.user['dateOfBirth'],
        email: this.user['email'],
        password: this.user['password'],
        role: this.user['role'],
        cotisation:this.user['cotisation']
      })
    })
  }
}


