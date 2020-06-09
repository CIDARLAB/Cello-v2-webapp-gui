import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { OutputDevice } from '@app/library/shared/file/output-device.model';

@Component({
  selector: 'app-output-assign',
  templateUrl: './output-assign.component.html',
  styleUrls: ['./output-assign.component.scss'],
})
export class OutputAssignComponent implements OnInit, OnChanges {
  @Input() symbols: string[];
  @Input() outputDevices: OutputDevice[];
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
}
