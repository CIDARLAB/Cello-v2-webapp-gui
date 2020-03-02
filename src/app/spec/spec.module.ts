import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavbarComponentModule } from '../navbar/navbar.module';
import { SpecPageRoutingModule } from './spec-routing.module';
import { SpecPage } from './spec.page';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        SpecPageRoutingModule,
        NavbarComponentModule,
    ],
    declarations: [SpecPage]
})
export class SpecPageModule { }
