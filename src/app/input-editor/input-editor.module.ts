import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { InputEditorComponent } from './input-editor.component';

@NgModule({
  declarations: [InputEditorComponent],
  imports: [CommonModule, NgxDatatableModule],
  exports: [InputEditorComponent],
})
export class InputEditorModule {}
