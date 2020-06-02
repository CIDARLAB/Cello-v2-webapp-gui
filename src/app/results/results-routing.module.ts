import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { extract } from '@app/i18n';
import { Shell } from '@app/shell/shell.service';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: '',
      component: ResultsComponent,
      data: { title: extract('Cello : Project : Results') },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultsRoutingModule {}
