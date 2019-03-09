import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { InputRowComponent } from '../input-row/input-row.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SynBioHubComponent } from '../synbiohub/synbiohub.component';

@NgModule({
    declarations: [
        NavbarComponent,
        InputRowComponent,
        SynBioHubComponent,
    ],
    imports: [
        CommonModule,
        IonicModule.forRoot(),
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    entryComponents: [
        NavbarComponent,
        InputRowComponent,
        SynBioHubComponent,
    ],
    exports: [
        NavbarComponent,
        InputRowComponent,
        SynBioHubComponent,
    ]
})
export class ComponentsModule { }
