import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VerilogPageRoutingModule } from './verilog-routing.module';
import { VerilogPage } from './verilog.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        VerilogPageRoutingModule
    ],
    declarations: [VerilogPage]
})
export class VerilogPageModule { }
