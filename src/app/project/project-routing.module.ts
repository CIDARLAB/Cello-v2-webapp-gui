import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { extract } from '@app/i18n';
import { Shell } from '@app/shell/shell.service';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'project',
      component: ProjectComponent,
      children: [
        {
          path: 'library',
          children: [
            {
              path: '',
              loadChildren: () => import('@app/library/library.module').then((m) => m.LibraryModule),
            },
          ],
        },
      ],
      data: { title: extract('Project') },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
