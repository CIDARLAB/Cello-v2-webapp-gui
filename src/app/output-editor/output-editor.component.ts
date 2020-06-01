import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-editor',
  templateUrl: './output-editor.component.html',
  styleUrls: ['./output-editor.component.scss'],
})
export class OutputEditorComponent implements OnInit {
  rows = [{ name: 'foo' }, { name: 'bar' }];

  constructor() {}

  ngOnInit(): void {}
}
