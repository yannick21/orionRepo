import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnectGadgetPageRoutingModule } from './connect-gadget-routing.module';

import { ConnectGadgetPage } from './connect-gadget.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnectGadgetPageRoutingModule
  ],
  declarations: [ConnectGadgetPage]
})
export class ConnectGadgetPageModule {}
