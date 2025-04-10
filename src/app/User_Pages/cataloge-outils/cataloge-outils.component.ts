import {Component, inject, OnInit} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {OutilServiceService} from "../../../services/Outil/outil-service.service";
import {DomSanitizer} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from "@angular/material/autocomplete";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {Observable, startWith} from "rxjs";
import {map} from "rxjs/operators";
import {jwtDecode} from "jwt-decode";
import {PretService} from "../../../services/Pret/pret.service";
import {MatCheckbox} from "@angular/material/checkbox";

@Component({
  selector: 'app-cataloge-outils',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    AsyncPipe,
    FormsModule,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    ReactiveFormsModule,
    MatCheckbox
  ],
  templateUrl: './cataloge-outils.component.html',
  styleUrl: './cataloge-outils.component.scss'
})
export class CatalogeOutilsComponent implements OnInit{
  isconnected=false;
  list=[];
  tools=[];
  toolImages: { [key: string]: any } = {}; // Store images by tool ID

  constructor(
    private outilsService:OutilServiceService,
    private sanitizer: DomSanitizer,
    private router:Router,
    private pretService:PretService
  ) {
  }
  private _formBuilder = inject(FormBuilder);

  form = this._formBuilder.group({
    search: ['']
  });
  filteredOptions: Observable<string[]>;
  categories: ['CAT1','CAT2'];
  filterForm=this._formBuilder.group({
    CAT1:[false],
    CAT2:[false],
    CAT3:[false],
  });
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.tools.filter(
      user =>
        user['categorieOutils'].toLowerCase().includes(filterValue)
        || user['etat'].toLowerCase().includes(filterValue)
        || user['nom'].toLowerCase().includes(filterValue)
        || user['index'].toString().includes(filterValue)
    );
  }
  ngOnInit() {
    this.isconnected=sessionStorage.getItem('token')!=null;
    this.loadData();
    this.filteredOptions = this.form.controls.search.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
  loadData(){
    this.outilsService.getOutils().subscribe((tools)=>{
        this.list=(tools as []);
        this.res=this.list;
        console.log(this.res)
        this.list.forEach((tool)=>{
          this.outilsService.getImageOutilById(tool.image).subscribe((img)=>{
            this.toolImages[tool.image] = URL.createObjectURL(img as Blob);
          });
          let cat=''
          let categories= [
            {value: 'CAT1', viewValue: 'Petit electromenager'},
            {value: 'CAT2', viewValue: 'Velos'},
            {value: 'CAT3', viewValue: 'Accessoires'},
          ];
          categories.forEach((c)=>{
            if(c.value==tool.categorieOutils)
              cat=c.viewValue;
          })
          if(tool.videoPath!=null){
            const embedUrl = this.convertToEmbedUrl(tool.videoPath);
            tool.videoPath=this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
          }
          this.tools.push({
            index:tool.outilId,
            nom:tool.nom,
            categorieOutils:cat,
            etat: tool.etat ? 'Disponible' : 'Non Disponible',
            image: tool.image,
            videoPath: tool.videoPath
          })
        })
      }
    );
  }
  convertToEmbedUrl(url: string): string {
    return url.replace('watch?v=', 'embed/');
  }
  login() {
    this.router.navigate([''])
  }
  res=[]
  chercher() {
    const filterValue=this.form.value.search;
    const tool=this.list.filter(
      (t)=>{
        return t['outilId']==filterValue;
      }
    )
    this.tools=tool;
  }

  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0'); // Assure que le jour ait 2 chiffres
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Mois est 0-indexé, donc ajout de 1
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
  }
  reserver(outilId: any) {
    const token = sessionStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      const currentDate = new Date(); // Date actuelle
      currentDate.setDate(currentDate.getDate() + 21);
      console.log(this.formatDate(currentDate))
      this.pretService.addPret({
        user_id:decodedToken['userId'],
        outil_id:outilId,
        dateRetour:this.formatDate(currentDate)
      }).subscribe((res)=>console.log(res))
    }
  }

  appliquerFiltre() {
    this.res=this.list.filter(
      (tool)=>{
        let cond=false;
        if(this.filterForm.value.CAT1)
          cond=cond || tool['categorieOutils']=='CAT1'
        if(this.filterForm.value.CAT2)
          cond=cond || tool['categorieOutils']=='CAT2'
        if(this.filterForm.value.CAT3)
          cond=cond || tool['categorieOutils']=='CAT3'
        return cond;
      });
    if(!this.filterForm.value.CAT1 && ! this.filterForm.value.CAT2)
      this.res=this.list;
    console.log(this.res);
  }
}
