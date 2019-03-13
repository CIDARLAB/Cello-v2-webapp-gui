import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
    selector: 'app-constraints',
    templateUrl: './constraints.page.html',
    styleUrls: ['./constraints.page.scss'],
})
export class ConstraintsPage implements OnInit {

    constructor(
        public project: ProjectService,
    ) {
    }

    ngOnInit() {
    }

    addInputConstraint() {
        this.project.inputConstraints.push({});
    }

    addOutputConstraint() {
        this.project.outputConstraints.push({});
    }

    onDeleteInput(_event) {
        this.project.inputConstraints = this.project.inputConstraints.filter((i: any) => i.id !== _event.id)
    }

    onDeleteOutput(_event) {
        this.project.outputConstraints = this.project.outputConstraints.filter((i: any) => i.id !== _event.id)
    }

}
