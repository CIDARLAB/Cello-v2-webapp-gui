import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputsModule } from '@app/inputs/inputs.module';
import { OutputsModule } from '@app/outputs/outputs.module';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { VerilogEditorComponent } from './verilog-editor/verilog-editor.component';
import { VerilogRoutingModule } from './verilog-routing.module';
import { VerilogComponent } from './verilog/verilog.component';

@NgModule({
  declarations: [VerilogComponent, VerilogEditorComponent],
  imports: [CommonModule, TranslateModule, IonicModule, FormsModule, VerilogRoutingModule, InputsModule, OutputsModule],
  exports: [VerilogEditorComponent],
})
export class VerilogModule {}
