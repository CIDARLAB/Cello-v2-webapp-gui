import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ApiService } from '../../api.service';
import { ProjectService } from '../../project.service';

@Component({
    selector: 'app-verilog',
    templateUrl: './verilog.component.html',
    styleUrls: ['./verilog.component.scss'],
})
export class VerilogComponent implements OnInit {

    public mode = 'verilog2001';
    @ViewChild('editor', { static: true }) editor: ElementRef;

    public sample: string;

    constructor(
        private api: ApiService,
        private platform: Platform,
        public project: ProjectService,
    ) {
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

    public height() {
        console.log(this.platform.height() - 275)
        return this.platform.height() - 275;
    }

    loadVerilog(file: string) {
        this.project.loadVerilog(file).subscribe((data) => {
            this.project.project.verilog = data;
            window['editor'].setValue(data, 1);
        });
    }

}
