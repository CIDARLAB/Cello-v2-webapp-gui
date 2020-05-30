import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/@shared';
import { IonicModule } from '@ionic/angular';
import { SettingsListComponent } from './settings-list/settings-list.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [SettingsComponent, SettingsListComponent],
  imports: [CommonModule, FormsModule, IonicModule, SettingsRoutingModule, SharedModule],
})
export class SettingsModule {}
