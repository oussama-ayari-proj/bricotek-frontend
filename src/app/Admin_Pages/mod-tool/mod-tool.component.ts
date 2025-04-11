import {Component, inject, OnInit} from '@angular/core';
import {MdbCheckboxModule} from "mdb-angular-ui-kit/checkbox";
import {MdbFormsModule} from "mdb-angular-ui-kit/forms";
import {MdbRippleModule} from "mdb-angular-ui-kit/ripple";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatInput, MatInputModule} from "@angular/material/input";
import {ActivatedRoute, Router} from "@angular/router";
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckbox} from "@angular/material/checkbox";
import {HttpClient} from "@angular/common/http";
import {MatIcon} from "@angular/material/icon";
import {OutilServiceService} from "../../../services/Outil/outil-service.service";

@Component({
  selector: 'app-mod-tool',
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
    MatInput,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckbox,
    MatIcon
  ],
  templateUrl: './mod-tool.component.html',
  styleUrl: './mod-tool.component.scss'
})
export class ModToolComponent implements OnInit{
constructor(
  private router:Router,
  private outilsService:OutilServiceService,
  private activatedRoute:ActivatedRoute
) {
}


  back() {
    this.router.navigateByUrl('/admin-home');
  }
  categories= [
    {value: 'CAT1', viewValue: 'Cat1'},
    {value: 'CAT2', viewValue: 'Cat2'},
  ];
  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    nom: ['', Validators.required],
    imgPath: [''],
    videoPath: [''],
    etat: [false,Validators.required],
    categorieOutils: ['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    //image: ['', Validators.required],
  });


  fileName = '';
  formData = new FormData();

  onFileSelected(event) {
    const file:File = event.target.files[0];
    if (file) {
      this.fileName=file.name;
      //this.secondFormGroup.controls.image.setValue(file.name);
      this.formData.append("photo", file);
    }
  }

  sendOutils() {
    this.outilsService.modifyOutilById(this.id,{
      imgPath: this.firstFormGroup.value.imgPath,
      videoPath: this.firstFormGroup.value.videoPath=='' ? null : this.firstFormGroup.value.videoPath,
      etat: this.firstFormGroup.value.etat,
      nom: this.firstFormGroup.value.nom,
      categorieOutils: this.firstFormGroup.value.categorieOutils
    }).subscribe((res)=>{
      if(this.formData.get("photo")!=null)
        this.outilsService.addImageOutils(this.id,this.formData.get("photo")).subscribe((res)=>{
          console.log(res);
        });
    })
  }
  id;
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('toolId');
    this.loadData(this.id);
  }
  outil={};
  toolImages: { [key: string]: any } = {};
  loadData(id){
    this.outilsService.getOutilById(id).subscribe((tool)=>{
        this.outil=tool;
        console.log(tool)
        console.log(this.outil)
        if(this.outil['image']!=null){
          this.outilsService.getImageOutilById(this.outil['image']).subscribe((img)=>{
           console.log(img);
          })
        }

        this.firstFormGroup.patchValue({
          etat: this.outil['etat'],
          nom: this.outil['nom'],
          categorieOutils: this.outil['categorieOutils'],
          videoPath: this.outil['videoPath'],
          imgPath: this.outil['imgPath']
        });
      }
    );
  }
}
