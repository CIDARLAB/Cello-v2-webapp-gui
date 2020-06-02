import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SynBioHubSubmitComponent } from './synbiohub-sumbit/synbiohub-submit.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@app/@shared';

@NgModule({
  declarations: [SynBioHubSubmitComponent],
  imports: [CommonModule, IonicModule, ReactiveFormsModule, FormsModule, TranslateModule],
  exports: [SynBioHubSubmitComponent],
})
export class SynBioHubModule {}
