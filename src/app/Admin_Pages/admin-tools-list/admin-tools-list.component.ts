import { Component, OnInit } from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { Router } from '@angular/router';
import { OutilServiceService } from '../../../services/Outil/outil-service.service';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-admin-tools-list',
  standalone: true,
  imports: [
    NgForOf,
    MdbRippleModule,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './admin-tools-list.component.html',
  styleUrls: ['../admin-user-list/admin-user-list.component.scss'], // Fixed typo here
})
export class AdminToolsListComponent implements OnInit {
  constructor(
    private router: Router,
    private outilsService: OutilServiceService,
    private sanitizer:DomSanitizer
  ) {}

  add() {
    this.router.navigateByUrl('admin-add-tool');
  }

  ngOnInit(): void {
    this.loadData();
  }
  outils: any[] = [];
  toolImages: { [key: string]: any } = {}; // Store images by tool ID
  categories= [
    {value: 'CAT1', viewValue: 'Petit electromenager'},
    {value: 'CAT2', viewValue: 'Velos'},
    {value: 'CAT3', viewValue: 'Accessoires'},
  ];
  loadData(){
    this.outilsService.getOutils().subscribe((tools)=>{
        this.outils=(tools as []);
        this.outils.forEach((tool)=>{
          if(tool.image!=null)
            this.outilsService.getImageOutilById(tool.image).subscribe((img)=>{
              console.log(img)
              this.toolImages[tool.image] = URL.createObjectURL(img as Blob);
            })
          this.categories.forEach((cat)=>{
            if(cat.value==tool.categorieOutils)
              tool.categorieOutils=cat.viewValue
          })
          if(tool.videoPath!=null){
            const embedUrl = this.convertToEmbedUrl(tool.videoPath);
            tool.videoPath=this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
          }
          console.log(tool.videoPath)
        })
      }
    );

    console.log(this.toolImages);
  }
  convertToEmbedUrl(url: string): string {
    return url.replace('watch?v=', 'embed/');
  }
  modify(outilId: any) {
    this.router.navigate(['/admin-mod-tool',outilId]);
  }

  delete(outilId: any) {
    /*this.outilsService.deleteOutilById(outilId).subscribe((res)=>{
      console.log(res);
    })*/
    const message=confirm("Êtes-vous sûr de vouloir supprimer cette outil ??");
    if(message){
      const index=this.outils.findIndex((tool)=> tool.outilId==outilId)
      if(index!=-1){
        this.outilsService.deleteOutilById(outilId).subscribe((res)=>{
          console.log(res);
        });
        this.outils.splice(index,1);
      }
    }

  }
}
