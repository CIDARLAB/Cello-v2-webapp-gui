import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ProjectService } from '../project.service';

@Component({
    selector: 'app-results',
    templateUrl: './results.page.html',
    styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
    public registry: string;
    public selected: object;

    constructor(
        private api: ApiService,
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

    isExt(ext: string) {
        if (this.selected['name']) {
            if (this.selected['name'].endsWith("." + ext)) {
                return true;
            }
        }
        else
            return false;
    }

    download(r: string) {
        this.api.download(this.project.project.name, r);
    }

}
