import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource,  } from '@capacitor/camera';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: Photo[] = [];

 
  constructor() { }
  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    this.photos.unshift({
      webviewPath: capturedPhoto.webPath
    })
  }
  public deleteFoto(index: number){
    this.photos.splice(index,1)
  }

}
export interface Photo{
  webviewPath:string,
  base64?: string;
}

