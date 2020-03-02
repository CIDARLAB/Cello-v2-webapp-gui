import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SynBioHubComponent } from './synbiohub.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
    ],
    declarations: [SynBioHubComponent],
    exports: [SynBioHubComponent]
})
export class SynBioHubComponentModule { }
