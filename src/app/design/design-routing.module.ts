import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesignPage } from './design.page';

const routes: Routes = [
  {
    path: '',
    component: DesignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignPageRoutingModule {}
