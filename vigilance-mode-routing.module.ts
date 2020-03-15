import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VigilanceModePage } from './vigilance-mode.page';

const routes: Routes = [
  {
    path: '',
    component: VigilanceModePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VigilanceModePageRoutingModule {}
