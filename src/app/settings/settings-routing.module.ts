import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { extract } from '@app/i18n';
import { Shell } from '@app/shell/shell.service';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: '',
      component: SettingsComponent,
      data: { title: extract('Cello : Project : Settings') },
    },
  ]),
];

// const routes: Routes = [
//   {
//     path: '',
//     component: SettingsComponent,
//     data: { title: extract('Cello : Welcome') }
//   },
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
