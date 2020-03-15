import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertManagementPageRoutingModule } from './alert-management-routing.module';

import { AlertManagementPage } from './alert-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertManagementPageRoutingModule
  ],
  declarations: [AlertManagementPage]
})
export class AlertManagementPageModule {}
