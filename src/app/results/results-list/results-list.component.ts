import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Result } from '@app/project/shared/result.model';
import { ApiService } from '@app/api/api.service';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss'],
})
export class ResultsListComponent implements OnInit, OnChanges {
  @Input() results: Result[];
  @Input() headline: string;
  map: Map<string, Result[]>;
  keys: string[];

  stages = new Map([
    ['logicSynthesis', 'Logic synthesis'],
    ['clustering', 'Clustering'],
    ['logicOptimization', 'Logic optimization'],
    ['partitioning', 'Partitioning'],
    ['technologyMapping', 'Technology mapping'],
    ['placing', 'Placement'],
    ['export', 'Export'],
  ]);

  constructor(private apiService: ApiService) {}

  private groupResultsByStage() {
    this.map = new Map<string, Result[]>();
    for (let result of this.results) {
      if (!this.map.get(result.stage)) {
        this.map.set(result.stage, []);
      }
      // Apply your hacky filters here
      if (result.stage === 'export' && !(result.name === 'sbol')) {
        continue;
      }
      this.map.get(result.stage).push(result);
    }
    this.keys = Array.from(this.map.keys());
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.groupResultsByStage();
  }
}
