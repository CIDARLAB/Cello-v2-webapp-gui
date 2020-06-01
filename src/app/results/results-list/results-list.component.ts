import { Component, OnInit, Input } from '@angular/core';
import { Result } from '@app/project/shared/result.model';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss'],
})
export class ResultsListComponent implements OnInit {
  @Input() results: Result[];
  map: Map<string, Result[]>;

  constructor() {
    this.map = new Map<string, Result[]>();
    this.map.set('logic', []);
  }

  private groupResultsByStage() {
    for (let result of this.results) {
      if (!this.map[result.stage]) {
        this.map[result.stage] = [];
      }
      this.map[result.stage].push(result);
    }
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.groupResultsByStage();
  }
}
