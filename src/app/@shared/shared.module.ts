import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoaderComponent } from './loader/loader.component';
import { IterablePipe } from './iterable/iterable.pipe';

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [LoaderComponent, IterablePipe],
  exports: [LoaderComponent],
})
export class SharedModule {}
