import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryListComponent } from './library-list/library-list.component';
import { LibraryComponent } from './library/library.component';
import { IonicModule } from '@ionic/angular';
import { LibraryRoutingModule } from './library-routing.module';

@NgModule({
  imports: [CommonModule, IonicModule, LibraryRoutingModule],
  declarations: [LibraryListComponent, LibraryComponent],
  exports: [LibraryComponent],
})
export class LibraryModule {}
