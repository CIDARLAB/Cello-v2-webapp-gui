import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';
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
    @ViewChild('editor', {static: true}) editor: ElementRef;

    constructor(
        private api: ApiService,
        private platform: Platform,
        private project: ProjectService,
    ) {
        this.height = this.platform.height() - 275;
        this.project.register('verilog', this.valid);
    }

    public valid = (() => {
        let rtn = null;
        try {
            rtn = (window['editor'].getSession().getAnnotations().length === 0) && (window['editor'].getValue());
        } catch { }
        return rtn;
    }).bind(window);

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
