import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { IonicModule } from '@ionic/angular';
import { ResultsListComponent } from './results-list/results-list.component';
import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [ResultsListComponent, ResultsComponent],
  imports: [CommonModule, IonicModule, ResultsRoutingModule, MatExpansionModule],
})
export class ResultsModule {}
