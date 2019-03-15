import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Constraint } from '../constraint';

@Component({
    selector: 'app-constraints',
    templateUrl: './constraints.page.html',
    styleUrls: ['./constraints.page.scss'],
})
export class ConstraintsPage implements OnInit {

    constructor(
        public project: ProjectService,
    ) {
        this.project.register('constraints', this.valid);
    }

    public valid = (() => {
        for (let c of this.project.inputConstraints) {
            if (!c.valid())
                return false;
        }
        for (let c of this.project.outputConstraints) {
            if (!c.valid())
                return false;
        }
        return true;
    }).bind(this);

    ngOnInit() {
    }

    addInputConstraint() {
        this.project.inputConstraints.push(new Constraint());
    }

    addOutputConstraint() {
        this.project.outputConstraints.push(new Constraint());
    }

    onDeleteInput(_event) {
        this.project.inputConstraints = this.project.inputConstraints.filter((i: Constraint) => i.id !== _event.id)
    }

    onDeleteOutput(_event) {
        this.project.outputConstraints = this.project.outputConstraints.filter((i: Constraint) => i.id !== _event.id)
    }

}
