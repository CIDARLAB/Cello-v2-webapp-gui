import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { IonicModule } from '@ionic/angular';
import { SynBioHubComponentModule } from '../synbiohub/synbiohub.module';
import { ResultsPageRoutingModule } from './results-routing.module';
import { ResultsPage } from './results.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ResultsPageRoutingModule,
        SynBioHubComponentModule,
        MatExpansionModule,
    ],
    declarations: [ResultsPage]
})
export class ResultsPageModule { }
