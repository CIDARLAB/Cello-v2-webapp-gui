import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-output-assign',
  templateUrl: './output-assign.component.html',
  styleUrls: ['./output-assign.component.scss'],
})
export class OutputAssignComponent implements OnInit {
  @Input() symbols: string[];
  @Input() outputDevices: any[];

  constructor() {}

  ngOnInit(): void {}
}
