import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SignupPage } from './signup.page';

const routes: Routes = [
    {
        path: '',
        component: SignupPage
    }
];

@NgModule({
    imports: [
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        CommonModule,
    ],
    declarations: [SignupPage]
})
export class SignupPageModule { }
