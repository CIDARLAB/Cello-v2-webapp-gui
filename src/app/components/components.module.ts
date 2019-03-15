import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ConstraintComponent } from '../constraint/constraint.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SynBioHubComponent } from '../synbiohub/synbiohub.component';

@NgModule({
    declarations: [
        NavbarComponent,
        ConstraintComponent,
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
        ConstraintComponent,
        SynBioHubComponent,
    ],
    exports: [
        NavbarComponent,
        ConstraintComponent,
        SynBioHubComponent,
    ]
})
export class ComponentsModule { }
