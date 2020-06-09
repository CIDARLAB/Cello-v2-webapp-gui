import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { OutputDeviceFileDescriptor } from '@app/library/shared/output-device-file-descriptor.model';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-output-device-file-list',
  templateUrl: './output-device-file-list.component.html',
  styleUrls: ['./output-device-file-list.component.scss'],
})
export class OutputDeviceFileListComponent implements OnInit {
  SelectionType = SelectionType;
  ColumnMode = ColumnMode;

  @Input() outputDeviceFiles: OutputDeviceFileDescriptor[];
  @Output() delete = new EventEmitter<OutputDeviceFileDescriptor>();
  @Output() download = new EventEmitter<OutputDeviceFileDescriptor>();

  constructor() {}

  ngOnInit(): void {}
}
