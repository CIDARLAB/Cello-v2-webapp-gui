import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/@shared';
import { IonicModule } from '@ionic/angular';
import { SettingsListComponent } from './settings-list/settings-list.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SettingsComponent, SettingsListComponent],
  imports: [CommonModule, TranslateModule, FormsModule, IonicModule, SettingsRoutingModule, SharedModule],
})
export class SettingsModule {}
