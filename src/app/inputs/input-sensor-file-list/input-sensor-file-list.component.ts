import { Component, OnInit, Input } from '@angular/core';
import { InputSensorFileDescriptor } from '@app/library/shared/input-sensor-file-descriptor.model';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-input-sensor-file-list',
  templateUrl: './input-sensor-file-list.component.html',
  styleUrls: ['./input-sensor-file-list.component.scss'],
})
export class InputSensorFileListComponent implements OnInit {
  SelectionType = SelectionType;
  ColumnMode = ColumnMode;

  @Input() inputSensorFiles: InputSensorFileDescriptor[];

  constructor() {}

  ngOnInit(): void {}
}
