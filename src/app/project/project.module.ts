import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProjectPageRoutingModule } from './project-routing.module';
import { ProjectPage } from './project.page';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ProjectPageRoutingModule,
    ],
    declarations: [ProjectPage]
})
export class ProjectPageModule { }
