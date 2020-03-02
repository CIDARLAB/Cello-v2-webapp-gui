import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesignPageRoutingModule } from './design-routing.module';

import { DesignPage } from './design.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesignPageRoutingModule
  ],
  declarations: [DesignPage]
})
export class DesignPageModule {}
