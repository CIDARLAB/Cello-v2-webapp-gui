import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerilogRoutingModule } from './verilog-routing.module';
import { VerilogComponent } from './verilog/verilog.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [VerilogComponent],
  imports: [CommonModule, IonicModule, VerilogRoutingModule],
})
export class VerilogModule {}
