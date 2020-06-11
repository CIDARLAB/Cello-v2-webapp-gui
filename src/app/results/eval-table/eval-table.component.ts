import { Component, OnInit, Input } from '@angular/core';
import { EvalTable } from '../shared/eval-table.model';

@Component({
  selector: 'app-eval-table',
  templateUrl: './eval-table.component.html',
  styleUrls: ['./eval-table.component.scss'],
})
export class EvalTableComponent implements OnInit {
  @Input() data: EvalTable;

  constructor() {}

  ngOnInit(): void {}
}
