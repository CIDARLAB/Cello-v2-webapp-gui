import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LibraryPageRoutingModule } from './library-routing.module';
import { LibraryPage } from './library.page';
import { LibraryDetailsComponentModule } from '../library-details/library-details.module';
import { LibraryDetailsComponent } from '../library-details/library-details.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LibraryPageRoutingModule,
        NgxDatatableModule,
        LibraryDetailsComponentModule,
    ],
    declarations: [LibraryPage],
    entryComponents: [LibraryDetailsComponent],
})
export class LibraryPageModule { }
