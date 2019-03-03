import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { ApiService } from '../api.service';
import { ProjectService } from '../project.service';

@Component({
    selector: 'app-verilog',
    templateUrl: './verilog.page.html',
    styleUrls: ['./verilog.page.scss'],
})
export class VerilogPage implements OnInit {

    public height: number;
    public mode = 'verilog2001';
    public menuItem;
    @ViewChild('editor') editor: ElementRef;

    constructor(
        private api: ApiService,
        private platform: Platform,
        private project: ProjectService,
        private menuController: MenuController,
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
        window['editor'].setValue(this.project.project.verilog, 1);
        let self = this;
        window['editor'].getSession().on('change', function() {
            setTimeout(() => {
                self.project.project.verilog = window['editor'].getValue();
                window.dispatchEvent(new Event('resize'));
            }, 1000);
        });
    }

}
