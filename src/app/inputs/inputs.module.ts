import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { InputAssignComponent } from './input-assign/input-assign.component';
import { InputSensorFileListComponent } from './input-sensor-file-list/input-sensor-file-list.component';
import { InputsComponent } from './inputs/inputs.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputAssignComponent, InputSensorFileListComponent, InputsComponent],
  imports: [CommonModule, IonicModule, TranslateModule, FormsModule, NgxDatatableModule],
  exports: [InputsComponent],
})
export class InputsModule {}
