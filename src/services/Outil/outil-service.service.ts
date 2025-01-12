import { Injectable } from '@angular/core';
import {OutilsService} from "../APIs/services/outils.service";

@Injectable({
  providedIn: 'root'
})
export class OutilServiceService {

  constructor(
    private outilApi:OutilsService
  ) { }

  getOutils(){
    return this.outilApi.getAllOutils();
  }
  getImageOutilById(id){
    return this.outilApi.getImageByName({
      id:id
    });
  }
  addOutils(outil){
    return this.outilApi.addOutil({
      outil:outil
    })
  }
  addImageOutils(outilsId,blob){
    return this.outilApi.uploadImage({
      outil_id:outilsId,
      body:{
        image: blob
      }
    });
  }
  getOutilById(id){
    return this.outilApi.getById({outilsId:id});
  }
  deleteOutilById(id){
    return this.outilApi.deleteOutil({
      outilId:id
    })
  }
  modifyOutilById(id,outil){
    return this.outilApi.modifyOutil({
      outilsId:id,
      outil:outil
    });
  }
}
