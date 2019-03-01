import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-input-row',
    templateUrl: './input-row.component.html',
    styleUrls: ['./input-row.component.scss'],
})
export class InputRowComponent implements OnInit {

    @Input() data: any
    @Output() onDelete = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {
        this.data.id = new Date().getTime()
    }

    deleteClicked() {
        this.onDelete.next(this.data)
    }

}
