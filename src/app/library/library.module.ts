import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LibraryListComponent } from './library-list/library-list.component';
import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library/library.component';

@NgModule({
  imports: [CommonModule, IonicModule, NgxDatatableModule, LibraryRoutingModule],
  declarations: [LibraryListComponent, LibraryComponent],
  exports: [LibraryComponent],
})
export class LibraryModule {}
