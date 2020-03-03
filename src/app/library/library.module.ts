import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LibraryPageRoutingModule } from './library-routing.module';
import { LibraryPage } from './library.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LibraryPageRoutingModule,
        NgxDatatableModule,
    ],
    declarations: [LibraryPage]
})
export class LibraryPageModule { }
