import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ResultsPageRoutingModule } from './results-routing.module';
import { ResultsPage } from './results.page';
import { SynBioHubComponentModule } from '../synbiohub/synbiohub.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ResultsPageRoutingModule,
        SynBioHubComponentModule,
    ],
    declarations: [ResultsPage]
})
export class ResultsPageModule { }
