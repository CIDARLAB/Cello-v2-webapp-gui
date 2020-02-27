import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecPage } from './spec.page';
import { VerilogComponent } from './verilog/verilog.component';
import { SynBioHubComponent } from '../synbiohub/synbiohub.component';

const routes: Routes = [
    {
        path: '',
        component: SpecPage,
        children: [
            {
                path: 'verilog',
                component: VerilogComponent
            },
            {
                path: 'library',
                children: [
                    {
                        path: '',
                        loadChildren: '../library/library.module#LibraryPageModule'
                    }
                ]
            },
            {
                path: 'settings',
                children: [
                    {
                        path: '',
                        loadChildren: '../settings/settings.module#SettingsPageModule'
                    }
                ]
            },
            // {
            //     path: 'constraints',
            //     children: [
            //         {
            //             path: '',
            //             loadChildren: '../constraints/constraints.module#ConstraintsPageModule'
            //         }
            //     ]
            // },
            {
                path: 'results',
                children: [
                    {
                        path: '',
                        loadChildren: '../results/results.module#ResultsPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/spec/verilog',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/spec/verilog',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class SpecPageRoutingModule { }
