import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { OutputAssignComponent } from './output-assign/output-assign.component';
import { OutputDeviceFileListComponent } from './output-device-file-list/output-device-file-list.component';
import { OutputDeviceFileManagerComponent } from './output-device-file-manager/output-device-file-manager.component';
import { OutputsComponent } from './outputs/outputs.component';

@NgModule({
  declarations: [
    OutputAssignComponent,
    OutputDeviceFileManagerComponent,
    OutputDeviceFileListComponent,
    OutputsComponent,
  ],
  imports: [CommonModule, IonicModule, FormsModule, NgxDatatableModule, TranslateModule],
  exports: [OutputsComponent],
})
export class OutputsModule {}
