import { Component, OnInit} from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.page.html',
  styleUrls: ['./localisation.page.scss'],
})
export class LocalisationPage implements OnInit {

  latitude: number;
  longitude: number;
  zoom = 13;

  myMarker: {
    latitude: number,
    longitude: number,
    name: string;
  };

  constructor(private geolocation: Geolocation,
              private  platform: Platform,
              private modalCtrl: ModalController) {

    this.platform.ready().then( () => {
      this.initMap();
    });

   }

  ngOnInit() {
    this.myMarker = {
      latitude: 0,
      longitude: 0,
      name: ''
    };
  }

  goBack(){
    this.modalCtrl.dismiss();
  }

  initMap() {
    /*this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });*/

    this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: false }).then((resp) => {
      this.latitude = resp.coords.latitude ;
      this.longitude = resp.coords.longitude ;
      this.myMarker.latitude = resp.coords.latitude;
      this.myMarker.longitude = resp.coords.longitude;

     });


    const watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
                this.latitude = data.coords.latitude;
                this.longitude = data.coords.longitude;
          });
        }

}
