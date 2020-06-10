import { Component, OnInit, Input, SimpleChanges, OnChanges, EventEmitter, Output } from '@angular/core';
import { InputSensor } from '@app/library/shared/file/input-sensor.model';

@Component({
  selector: 'app-input-assign',
  templateUrl: './input-assign.component.html',
  styleUrls: ['./input-assign.component.scss'],
})
export class InputAssignComponent implements OnInit, OnChanges {
  @Input() symbols: string[] = [];
  @Input() inputSensors: InputSensor[] = [];
  @Output() assign = new EventEmitter<object>();
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

  assignInputSensor(): void {
    this.assign.emit(this.map);
  }
}
