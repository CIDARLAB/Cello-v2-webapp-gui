import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LibraryPage } from './library.page';
import { ComponentsModule } from '../components/components.module';

const routes: Routes = [
    {
        path: '',
        component: LibraryPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ComponentsModule
    ],
    declarations: [LibraryPage]
})
export class LibraryPageModule { }
