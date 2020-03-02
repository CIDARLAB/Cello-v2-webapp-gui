import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { NavbarComponentModule } from '../navbar/navbar.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LoginPageRoutingModule,
        NavbarComponentModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    declarations: [LoginPage]
})
export class LoginPageModule { }
