import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Constraint } from '../constraint';
import { ProjectService } from '../project.service';

@Component({
    selector: 'app-constraint',
    templateUrl: './constraint.component.html',
    styleUrls: ['./constraint.component.scss'],
})
export class ConstraintComponent implements OnInit {

    @Input() constraint: Constraint;
    @Input() direction: string;
    @Output() onDelete = new EventEmitter<any>();

    constructor(
        public project: ProjectService,
    ) {
    }

    ngOnInit() {
        this.constraint.id = new Date().getTime();
    }

    deleteClicked() {
        this.onDelete.next(this.constraint);
    }

    ports() {
        const ports = this.project.ports();
        if (this.direction === "input") {
            return ports.input;
        }
        if (this.direction === "output") {
            return ports.output;
        }
    }

}
