import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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
  @Output() delete = new EventEmitter<InputSensorFileDescriptor>();
  @Output() download = new EventEmitter<InputSensorFileDescriptor>();

  constructor() {}

  ngOnInit(): void {}

  deleteFile(descriptor: InputSensorFileDescriptor, event: any): void {
    this.delete.emit(descriptor);
  }

  downloadFile(descriptor: InputSensorFileDescriptor, event: any): void {
    this.download.emit(descriptor);
  }
}
