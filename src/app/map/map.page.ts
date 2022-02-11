import { Component, ElementRef, ViewChild } from '@angular/core';

declare var google : any;

@Component({
  selector: 'app-tab2',
  templateUrl: 'map.page.html',
  styleUrls: ['map.page.scss']
})
export class MapPage {

  @ViewChild('map') mapRef: ElementRef;

  map: google.maps.Map;
  
  constructor() {}

  ionViewWillEnter(){
    this.initMap
  }

   initMap():void{
      const position = new google.maps.LatLng(-15.789454334497043, -47.874197180161815)
      const options ={
        center : position,
        zoom:10,
        disableDefaultUI:false
      }

      this.map = new google.maps.Map(this.mapRef.nativeElement, options)
  }
}
