import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import * as d3Graphviz from 'd3-graphviz';
import { ApiService } from '../api.service';
import { ProjectService } from '../project.service';
import { MenuController } from '@ionic/angular';

// https://github.com/AntoineTB/debugD3GraphViz
const _ = d3Graphviz.graphviz;

@Component({
    selector: 'app-results',
    templateUrl: './results.page.html',
    styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
    @ViewChild('view')
    private view: ElementRef;

    constructor(
        public project: ProjectService,
        private api: ApiService,
        private menuController: MenuController,
    ) {
    }

    ionViewWillEnter() {
        this.menuController.enable(true);
    }

    ngOnInit() {
    }

    result(id: string) {
        return this.api.results(this.api.session, this.project.project.name, id).toPromise();
    }

    show(id: string) {
        this.result(id).then((data) => {
            d3.select(this.view.nativeElement).graphviz().renderDot(data);
        });
    }

}
