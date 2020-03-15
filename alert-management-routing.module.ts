import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertManagementPage } from './alert-management.page';

const routes: Routes = [
  {
    path: '',
    component: AlertManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertManagementPageRoutingModule {}
