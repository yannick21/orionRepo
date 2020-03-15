import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LocalisationPage } from '../localisation/localisation.page';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.page.html',
  styleUrls: ['./dashbord.page.scss'],
})
export class DashbordPage implements OnInit {

  constructor(private modalCtrl: ModalController,
              private router: Router) { }

  ngOnInit() {
  }


  goBack(){
    this.modalCtrl.dismiss();
  }

  async toLocate(index: number) {
    const modal = await this.modalCtrl.create({
      component: LocalisationPage
    });
    return await modal.present();
}

}
