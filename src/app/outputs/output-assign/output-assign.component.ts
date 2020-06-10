import { Component, OnInit, Input, SimpleChanges, OnChanges, EventEmitter, Output } from '@angular/core';
import { OutputDevice } from '@app/library/shared/file/output-device.model';

@Component({
  selector: 'app-output-assign',
  templateUrl: './output-assign.component.html',
  styleUrls: ['./output-assign.component.scss'],
})
export class OutputAssignComponent implements OnInit, OnChanges {
  @Input() symbols: string[];
  @Input() outputDevices: OutputDevice[];
  @Output() assign = new EventEmitter<object>();
  map: object;

  constructor() {
    this.map = {};
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.outputDevices) {
      this.map = {};
    }
  }

  assignOutputDevice(): void {
    this.assign.emit(this.map);
  }
}
