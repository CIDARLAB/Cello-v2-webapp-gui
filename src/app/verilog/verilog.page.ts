import { Component, OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';

@Component({
    selector: 'app-verilog',
    templateUrl: './verilog.page.html',
    styleUrls: ['./verilog.page.scss'],
})
export class VerilogPage implements OnInit {

    private height: number;

    constructor(
        private menuController: MenuController,
        private platform: Platform,
    ) {
        this.height = this.platform.height() - 275;
    }

    ionViewWillEnter() {
        this.menuController.enable(true);
    }

    ngOnInit() {
    }

}
