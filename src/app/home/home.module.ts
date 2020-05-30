import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarModule } from '@app/navbar/navbar.module';
import { ProjectModule } from '@app/project/project.module';
import { CoreModule } from '@core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared';
import { Angulartics2Module } from 'angulartics2';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    IonicModule,
    Angulartics2Module,
    HomeRoutingModule,
    ProjectModule,
    NavbarModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
