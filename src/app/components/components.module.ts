import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { InputRowComponent } from '../input-row/input-row.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        NavbarComponent,
        InputRowComponent
    ],
    imports: [
        CommonModule,
        IonicModule.forRoot(),
        RouterModule,
        FormsModule
    ],
    entryComponents: [
        NavbarComponent,
        InputRowComponent
    ],
    exports: [
        NavbarComponent,
        InputRowComponent
    ]
})
export class ComponentsModule { }
