import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
    selector: 'app-results',
    templateUrl: './results.page.html',
    styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

    constructor(
        public project: ProjectService
    ) {
    }

    ngOnInit() {
    }

}
