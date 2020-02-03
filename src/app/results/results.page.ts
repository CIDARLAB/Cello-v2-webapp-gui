import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import * as d3Graphviz from 'd3-graphviz';
import { ApiService } from '../api.service';
import { ProjectService } from '../project.service';
import { HttpClient } from '@angular/common/http';

// https://github.com/AntoineTB/debugD3GraphViz
const _ = d3Graphviz.graphviz;

@Component({
    selector: 'app-results',
    templateUrl: './results.page.html',
    styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
    @ViewChild('graphviz', { static: true })
    private view: ElementRef;
    public registry: string;
    public selected: object;

    constructor(
        private api: ApiService,
        private http: HttpClient,
        public project: ProjectService,
    ) {
        this.selected = {};
        this.registry = this.project.registry;
    }

    ngOnInit() {
        // const body = this.api.session;
        // this.api.results(body, "a").subscribe((data) => {
        //     this.project.project.results = data;
        // });
    }

    result(file: string) {
        return this.api.result(this.project.project.name, file);
    }

    // isDot() {
    //     if (this.selected['name']) {
    //         if (this.result['name'].endsWith(".dot"))
    //             return true;
    //     }
    //     else
    //         return false;
    // }

    isExt(ext: string) {
        if (this.selected['name']) {
            if (this.selected['name'].endsWith("." + ext)) {
                return true;
            }
        }
        else
            return false;
    }

    show(result: object) {
        // this.selected = result;
        // d3.select(this.view.nativeElement).selectAll(function() { return this.childNodes; }).remove();
        // if (result['name'].endsWith(".dot")) {
        //     this.api.result(this.project.project.name, result['name']).subscribe(async (data) => {
        //         // const reader = new FileReader();
        //         // let str = reader.readAsText(data);
        //         const text = await new Response(data).text();
        //         d3.select(this.view.nativeElement).graphviz().renderDot(data);
        //     });
        // }
    }

    download(r: string) {
        this.api.download(this.project.project.name, r);
    }

}
