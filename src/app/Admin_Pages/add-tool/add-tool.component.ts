import {Component, inject} from '@angular/core';
import {MdbCheckboxModule} from "mdb-angular-ui-kit/checkbox";
import {MdbFormsModule} from "mdb-angular-ui-kit/forms";
import {MdbRippleModule} from "mdb-angular-ui-kit/ripple";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Location} from "@angular/common";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators, FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckbox} from "@angular/material/checkbox";
import {HttpClient} from "@angular/common/http";
import {MatIcon} from "@angular/material/icon";
import {OutilServiceService} from "../../../services/Outil/outil-service.service";

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
  templateUrl: './add-tool.component.html',
  styleUrl: './add-tool.component.scss'
})
export class AddToolComponent {
constructor(
  private router:Router,
  private outilsService:OutilServiceService
) {
}

  back() {
    this.router.navigateByUrl('/admin-home');
  }
  categories= [
    {value: 'CAT1', viewValue: 'Petit electromenager'},
    {value: 'CAT2', viewValue: 'Velos'},
    {value: 'CAT3', viewValue: 'Accessoires'},
  ];
  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    nom: ['', Validators.required],
    imgPath: [''],
    videoPath: [''],
    codeRangement: [''],
    marque: [''],
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
    this.outilsService.addOutils(this.firstFormGroup.value).subscribe((res)=>{
      console.log(res);
      let outilId=res['outilId'];
      if(this.fileName)
        this.outilsService.addImageOutils(outilId,this.formData.get("photo")).subscribe((res)=>{
          console.log(res);
        });
    })
  }
}
