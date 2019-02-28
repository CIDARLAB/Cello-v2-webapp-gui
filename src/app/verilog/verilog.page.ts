import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
    selector: 'app-verilog',
    templateUrl: './verilog.page.html',
    styleUrls: ['./verilog.page.scss'],
})
export class VerilogPage implements OnInit {

    constructor(
        private menuController: MenuController
    ) { }

    ngOnInit() {
        this.menuController.enable(true);
    }

}
