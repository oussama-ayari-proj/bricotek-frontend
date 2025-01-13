import { Injectable } from '@angular/core';
import {PretsService} from "../APIs/services/prets.service";

@Injectable({
  providedIn: 'root'
})
export class PretService {

  constructor(
    private pretService:PretsService
  ) { }

  getAll() {
    return this.pretService.getAll();
  }

  addPret(value: any) {
    return this.pretService.add({
      outilId:value['outil_id'],
      userId:value['user_id'],
      dateRetour:value['dateRetour']
    })
  }
}
