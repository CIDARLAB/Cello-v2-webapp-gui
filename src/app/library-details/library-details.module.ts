import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibraryDetailsComponent } from './library-details.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,],
  declarations: [LibraryDetailsComponent],
  exports: [LibraryDetailsComponent]
})
export class LibraryDetailsComponentModule {}
