import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { InputSensor } from '@app/library/shared/file/input-sensor.model';

@Component({
  selector: 'app-input-assign',
  templateUrl: './input-assign.component.html',
  styleUrls: ['./input-assign.component.scss'],
})
export class InputAssignComponent implements OnInit, OnChanges {
  @Input() symbols: string[] = [];
  @Input() inputSensors: InputSensor[] = [];
  map: object;

  constructor() {
    this.map = {};
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.inputSensors) {
      this.map = {};
    }
  }
}
