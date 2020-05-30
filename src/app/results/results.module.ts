import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsRoutingModule } from './results-routing.module';
import { ResultsListComponent } from './results-list/results-list.component';

@NgModule({
  declarations: [ResultsListComponent],
  imports: [CommonModule, ResultsRoutingModule],
})
export class ResultsModule {}
