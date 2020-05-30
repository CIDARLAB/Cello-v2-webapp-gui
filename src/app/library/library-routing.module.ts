import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { extract } from '@app/i18n';
import { Shell } from '@app/shell/shell.service';
import { LibraryComponent } from './library/library.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: '',
      component: LibraryComponent,
      data: { title: extract('Cello : Project : Library') },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibraryRoutingModule {}
