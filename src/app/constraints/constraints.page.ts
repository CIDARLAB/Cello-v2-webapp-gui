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
        for (let c of this.project.project.constraints.input) {
            if (!c.valid())
                return false;
        }
        for (let c of this.project.project.constraints.output) {
            if (!c.valid())
                return false;
        }
        return true;
    }).bind(this);

    ngOnInit() {
    }

    addInputConstraint() {
        this.project.project.constraints.input.push(new Constraint());
    }

    addOutputConstraint() {
        this.project.project.constraints.output.push(new Constraint());
    }

    onDeleteInput(_event) {
        this.project.project.constraints.input = this.project.project.constraints.input.filter((i: Constraint) => i.id !== _event.id)
    }

    onDeleteOutput(_event) {
        this.project.project.constraints.output = this.project.project.constraints.output.filter((i: Constraint) => i.id !== _event.id)
    }

}
