import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { extract } from '@app/i18n';
import { Shell } from '@app/shell/shell.service';
import { VerilogComponent } from './verilog/verilog.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: '',
      component: VerilogComponent,
      data: { title: extract('Cello : Project : Verilog') },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerilogRoutingModule {}
