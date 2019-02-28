import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ProjectsPage } from './projects.page';
import { ComponentsModule } from '../components/components.module';

const routes: Routes = [
    {
        path: '',
        component: ProjectsPage
    }
];

@NgModule({
    imports: [
        NgxDatatableModule,
        RouterModule.forChild(routes),
        FormsModule,
        IonicModule,
        CommonModule,
        ComponentsModule,
    ],
    declarations: [ProjectsPage]
})
export class ProjectsPageModule { }
