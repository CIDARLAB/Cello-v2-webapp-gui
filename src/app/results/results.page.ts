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
    @ViewChild('graphviz', {static: true})
    private view: ElementRef;
    public result: object;
    public registry: string;

    constructor(
        private api: ApiService,
        private http: HttpClient,
        public project: ProjectService,
    ) {
        this.result = {};
        // this.project.project.name = "a";
        this.registry = this.project.registry;
    }

    ngOnInit() {
        // const body = this.api.session;
        // this.api.results(body, "a").subscribe((data) => {
        //     this.project.project.results = data;
        // });
    }

    results(file: string) {
        return this.api.results(this.project.project.name, file);
    }

    isDot() {
        if (this.result['name']) {
            if (this.result['name'].endsWith(".dot"))
                return true;
        }
        else
            return false;
    }

    show(result: object) {
        this.result = result;
        // d3.select(this.view.nativeElement).selectAll(function() { return this.childNodes; }).remove();
        if (result['name'].endsWith(".dot")) {
            this.results(result['name']).subscribe(async (data) => {
                // const reader = new FileReader();
                // let str = reader.readAsText(data);
                const text = await new Response(data).text();
                d3.select(this.view.nativeElement).graphviz().renderDot(data);
            });
        }
    }

    download(result: object) {
        const file = result['name'];
        let url = 'results/' + this.project.project.name + '/' + file;
        this.http.get(url, { responseType: "blob" }).subscribe((data) => {
            let dataType = data.type;
            let binaryData = [];
            binaryData.push(data);
            let downloadLink = document.createElement('a');
            downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: dataType }));
            downloadLink.setAttribute('download', file);
            document.body.appendChild(downloadLink);
            downloadLink.click();
        });
        // this.result(file).subscribe((data) => {
        //     let blob = new Blob([data], { type: 'text/csv' });
        //     console.log(blob);

        // });
    }

}
