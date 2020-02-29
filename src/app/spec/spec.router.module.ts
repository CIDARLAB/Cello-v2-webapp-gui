import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecPage } from './spec.page';

const routes: Routes = [
    {
        path: '',
        component: SpecPage,
        children: [
            {
                path: 'verilog',
                loadChildren: () => import('./verilog/verilog.module').then(m => m.VerilogPageModule)
            },
            {
                path: 'library',
                loadChildren: () => import('./library/library.module').then(m => m.LibraryPageModule)
            },
            {
                path: 'settings',
                loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
            },
            // {
            //     path: 'constraints',
            // 	loadChildren: () => import('./constraints/constraints.module').then(m => m.ConstraintsPageModule)
            // },
            {
                path: 'results',
                loadChildren: () => import('./../results/results.module').then(m => m.ResultsPageModule)
            },
            {
                path: '',
                redirectTo: '/spec/verilog',
                pathMatch: 'full'
            },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class SpecPageRoutingModule { }
