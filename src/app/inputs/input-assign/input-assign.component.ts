import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-assign',
  templateUrl: './input-assign.component.html',
  styleUrls: ['./input-assign.component.scss'],
})
export class InputAssignComponent implements OnInit {
  @Input() symbols: string[] = [];
  @Input() inputSensors: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
