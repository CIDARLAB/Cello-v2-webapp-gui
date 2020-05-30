import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarModule } from '@app/navbar/navbar.module';
import { IonicModule } from '@ionic/angular';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project/project.component';

@NgModule({
  imports: [CommonModule, NgxDatatableModule, IonicModule, ProjectRoutingModule, NavbarModule],
  declarations: [ProjectListComponent, ProjectComponent],
  exports: [ProjectListComponent],
})
export class ProjectModule {}
