import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputEditorModule } from '@app/input-editor/input-editor.module';
import { OutputEditorModule } from '@app/output-editor/output-editor.module';
import { IonicModule } from '@ionic/angular';
import { VerilogEditorComponent } from './verilog-editor/verilog-editor.component';
import { VerilogRoutingModule } from './verilog-routing.module';
import { VerilogComponent } from './verilog/verilog.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [VerilogComponent, VerilogEditorComponent],
  imports: [
    CommonModule,
    TranslateModule,
    IonicModule,
    FormsModule,
    VerilogRoutingModule,
    InputEditorModule,
    OutputEditorModule,
  ],
  exports: [VerilogEditorComponent],
})
export class VerilogModule {}
