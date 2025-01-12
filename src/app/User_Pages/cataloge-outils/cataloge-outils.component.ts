import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {OutilServiceService} from "../../../services/Outil/outil-service.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-cataloge-outils',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './cataloge-outils.component.html',
  styleUrl: './cataloge-outils.component.scss'
})
export class CatalogeOutilsComponent implements OnInit{
  isconnected=false;
  list=[];
  toolImages: { [key: string]: any } = {}; // Store images by tool ID

  constructor(
    private outilsService:OutilServiceService,
    private sanitizer: DomSanitizer
  ) {
  }
  ngOnInit() {
    this.isconnected=sessionStorage.getItem('token')!=null;
    this.loadData();
  }
  loadData(){
    this.outilsService.getOutils().subscribe((tools)=>{
        this.list=(tools as []);
        this.list.forEach((tool)=>{
          this.outilsService.getImageOutilById(tool.image).subscribe((img)=>{
            this.toolImages[tool.image] = URL.createObjectURL(img as Blob);
          })
        })
      }
    );
  }

  test() {
    console.log(this.list);
    console.log(this.toolImages)
  }
}
