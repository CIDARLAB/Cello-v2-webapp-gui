import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';
import { ResultsPage } from './results.page';

const routes: Routes = [
    {
        path: '',
        component: ResultsPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        IonicModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        FormsModule,
    ],
    declarations: [ResultsPage]
})
export class ResultsPageModule { }
