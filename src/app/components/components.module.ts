import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        CommonModule,
        IonicModule.forRoot(),
        RouterModule
    ],
    entryComponents: [
        NavbarComponent
    ],
    exports: [
        NavbarComponent
    ]
})
export class ComponentsModule { }
