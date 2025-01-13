import {Component, inject, OnInit} from '@angular/core';
import {MdbCheckboxModule} from "mdb-angular-ui-kit/checkbox";
import {MdbFormsModule} from "mdb-angular-ui-kit/forms";
import {MdbRippleModule} from "mdb-angular-ui-kit/ripple";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger,
  MatOption
} from "@angular/material/autocomplete";
import {Router} from "@angular/router";
import {UserService} from "../../../services/User/user.service";
import {OutilServiceService} from "../../../services/Outil/outil-service.service";
import {Observable, startWith} from "rxjs";
import {map} from "rxjs/operators";
import {AsyncPipe} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {PretService} from "../../../services/Pret/pret.service";

@Component({
  selector: 'app-add-pret',
  standalone: true,
  imports: [
    MdbCheckboxModule,
    MdbFormsModule,
    MdbRippleModule,
    ReactiveFormsModule,
    MatFormField,
    MatAutocomplete,
    MatOption,
    MatAutocompleteTrigger,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  templateUrl: './add-pret.component.html',
  styleUrl: '../../login/login.component.scss'
})
export class AddPretComponent implements OnInit{
  private _formBuilder = inject(FormBuilder);

  form = this._formBuilder.group({
    outil_id: ['', Validators.required],
    user_id: ['', Validators.required],
    dateRetour: ['', Validators.required]
  });
  filteredOptions: Observable<string[]>;
  filteredOptionsOutils: Observable<string[]>;
constructor(
  private router:Router,
  private userService:UserService,
  private outilsService: OutilServiceService,
  private pretService:PretService
) {
}
  onSubmit() {
    console.log(this.form.value)
    this.pretService.addPret(this.form.value).subscribe((res)=>{
      console.log(res)
    })
  }

  back() {
    this.router.navigateByUrl('/admin-home');
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.users.filter(
      user =>
        user['email'].toLowerCase().includes(filterValue)
      || user['prenom'].toLowerCase().includes(filterValue)
      || user['nom'].toLowerCase().includes(filterValue)
      || user['index'].toString().includes(filterValue)
    );
  }

  private _filter_outils(value: string): string[] {
    const filterValue = value.toLowerCase();
    console.log(filterValue)
    console.log(this.tools)
    return this.tools.filter(
      tool =>
        tool['nom'].toLowerCase().includes(filterValue)
      || tool['categorieOutils'].toLowerCase().includes(filterValue)
      || tool['index'].toLowerCase().includes(filterValue)
    );
  }
  ngOnInit(): void {
    this.filteredOptions = this.form.controls.user_id.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this.filteredOptionsOutils = this.form.controls.outil_id.valueChanges.pipe(
      startWith(''),
      map(value => this._filter_outils(value || '')),
    );
    this.loadData();
  }
  users=[]
  tools=[]
  private loadData() {
    this.userService.getUsers()
      .subscribe(
        {
          next:(res)=>{
            let list=res as [];
            list.forEach((user)=>{
              this.users.push({
                index:user['userId'],
                nom:user['nom'],
                prenom:user['prenom'],
                email:user['email']
              })
            })
            console.log(this.users)
          },
          error:(err)=>{
            console.log(err)
          }
        }
      );
    this.outilsService.getOutils().subscribe((res)=>{
        const list=(res as []);
        list.forEach((tool)=>{
          this.tools.push({
            index:tool['outilId'],
            nom:tool['nom'],
            categorieOutils:tool['categorieOutils']
          })
        })
        console.log(this.tools);
      }
    );
  }
}
