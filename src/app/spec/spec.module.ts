import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SubmitPageModule } from '../submit/submit.module';
import { SpecPage } from './spec.page';
import { SpecPageRoutingModule } from './spec.router.module';
import { VerilogComponent } from './verilog/verilog.component';
import { ComponentsModule } from '../components/components.module';

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
        VerilogComponent,
    ]
})
export class SpecPageModule { }
