import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalisationPageRoutingModule } from './localisation-routing.module';

import { LocalisationPage } from './localisation.page';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  
    AgmCoreModule.forRoot({apiKey: 'AIzaSyAy4dLnxOGDcmtEZ8qq5luqyysgiHkzQTI'})
  ],
  declarations: [LocalisationPage]
})
export class LocalisationPageModule {}
