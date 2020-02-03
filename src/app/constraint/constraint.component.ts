import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Constraint } from '../constraint';

@Component({
    selector: 'app-constraint',
    templateUrl: './constraint.component.html',
    styleUrls: ['./constraint.component.scss'],
})
export class ConstraintComponent implements OnInit {

    @Input() constraint: Constraint;
    @Output() onDelete = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {
        this.constraint.id = new Date().getTime();
    }

    deleteClicked() {
        this.onDelete.next(this.constraint);
    }

}
