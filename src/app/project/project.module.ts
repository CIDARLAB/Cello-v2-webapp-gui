import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list/project-list.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [CommonModule, NgxDatatableModule],
  declarations: [ProjectListComponent],
  exports: [ProjectListComponent],
})
export class ProjectModule {}
