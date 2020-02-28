import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';
import { SubmitPageModule } from '../submit/submit.module';
import { SpecPage } from './spec.page';
import { SpecPageRoutingModule } from './spec.router.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        SpecPageRoutingModule,
        SubmitPageModule,
        ComponentsModule,
    ],
    declarations: [
        SpecPage,
    ]
})
export class SpecPageModule { }
