import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
    selector: 'app-submit',
    templateUrl: './submit.page.html',
    styleUrls: ['./submit.page.scss'],
})
export class SubmitPage implements OnInit {

    constructor(
        public project: ProjectService,
    ) { }

    ngOnInit() {
    }

}
