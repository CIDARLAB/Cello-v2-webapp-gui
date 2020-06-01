import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-verilog-editor',
  templateUrl: './verilog-editor.component.html',
  styleUrls: ['./verilog-editor.component.scss'],
})
export class VerilogEditorComponent implements OnInit {
  @Output() verilog = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  init() {
    let self = this;
    window['editor'].getSession().on('change', function () {
      setTimeout(() => {
        // self.project.project.verilog = window['editor'].getValue();
        // window.dispatchEvent(new Event('resize'));
        self.verilog.emit(window['editor'].getValue());
      }, 100);
    });
  }
}
