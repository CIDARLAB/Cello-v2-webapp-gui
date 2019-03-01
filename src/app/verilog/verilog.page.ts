import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { SessionService } from '../session.service';

@Component({
    selector: 'app-verilog',
    templateUrl: './verilog.page.html',
    styleUrls: ['./verilog.page.scss'],
})
export class VerilogPage implements OnInit {

    private height: number;
    public mode = 'verilog2001';
    public menuItem;
    @ViewChild('editor') editor: ElementRef;

    constructor(
        private menuController: MenuController,
        private platform: Platform,
        private session: SessionService,
    ) {
        this.height = this.platform.height() - 275;
    }

    ionViewWillEnter() {
        this.menuController.enable(true);
    }

    ionViewWillLoad() {
        this.init();
    }

    ngOnInit() {
    }

    init() {
        window['editor'].setValue(this.session.project.verilog, 1);
        let self = this;
        window['editor'].getSession().on('change', function() {
            console.log('change');
            setTimeout(() => {
                self.session.project.verilog = window['editor'].getValue();
                window.dispatchEvent(new Event('resize'));
            }, 1000);
        });
    }

}
