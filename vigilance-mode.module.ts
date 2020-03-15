import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VigilanceModePageRoutingModule } from './vigilance-mode-routing.module';

import { VigilanceModePage } from './vigilance-mode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VigilanceModePageRoutingModule
  ],
  declarations: [VigilanceModePage]
})
export class VigilanceModePageModule {}
