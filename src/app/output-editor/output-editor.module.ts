import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { OutputEditorComponent } from './output-editor.component';

@NgModule({
  declarations: [OutputEditorComponent],
  imports: [CommonModule, NgxDatatableModule],
  exports: [OutputEditorComponent],
})
export class OutputEditorModule {}
