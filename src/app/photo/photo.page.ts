import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'Photo.page.html',
  styleUrls: ['Photo.page.scss']
})
export class PhotoPage {

  constructor(public photoService : PhotoService, public actionSheetController : ActionSheetController) {}
  
  addPhotoToGallery( ) {
    this.photoService.addNewToGallery();
    
  }

  async presentActionSheet(i :number){
    const actionSheet = await this.actionSheetController.create({
      header: 'o que deseja fazer?',
      buttons:[{
        text:'Deletar',
        icon:'trash',
        handler: () =>{
          this.photoService.deleteFoto(i);
        }
      },{
        text:'Cancelar',
        icon:'close',
        role:'cancel'
      }]
    })
    await actionSheet.present();
  }

}

