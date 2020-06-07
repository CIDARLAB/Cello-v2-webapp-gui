import { Component, OnInit, Input } from '@angular/core';
import { InputSensorFileDescriptor } from '@app/library/shared/input-sensor-file.model';

@Component({
  selector: 'app-input-editor',
  templateUrl: './input-editor.component.html',
  styleUrls: ['./input-editor.component.scss'],
})
export class InputEditorComponent implements OnInit {
  rows = [{ name: 'foo' }, { name: 'bar' }];

  constructor() {}

  ngOnInit(): void {}
}
