import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SpecPageRoutingModule } from './spec-routing.module';
import { SpecPage } from './spec.page';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        SpecPageRoutingModule,
    ],
    declarations: [SpecPage]
})
export class SpecPageModule { }
