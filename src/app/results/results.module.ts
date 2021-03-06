import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ResultsListComponent } from './results-list/results-list.component';
import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results/results.component';
import { SynBioHubModule } from '@app/synbiohub/synbiohub.module';
import { EvalTableComponent } from './eval-table/eval-table.component';

@NgModule({
  declarations: [ResultsListComponent, ResultsComponent, EvalTableComponent],
  imports: [CommonModule, TranslateModule, IonicModule, ResultsRoutingModule, MatExpansionModule, SynBioHubModule],
})
export class ResultsModule {}
