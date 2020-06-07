import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Result } from '@app/project/shared/result.model';
import { ApiService } from '@app/api/api.service';
import { ProjectService } from '@app/project/project.service';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss'],
})
// TODO this class needs refactoring
export class ResultsListComponent implements OnInit, OnChanges {
  @Input() results: Result[];
  // @Input() headline: string;
  headline: Blob | SafeUrl | string;
  map: Map<string, Result[]>;
  keys: string[];
  blobs: Map<string, SafeUrl> = new Map<string, SafeUrl>();

  stages = new Map([
    ['logicSynthesis', 'Logic synthesis'],
    ['clustering', 'Clustering'],
    ['logicOptimization', 'Logic optimization'],
    ['partitioning', 'Partitioning'],
    ['technologyMapping', 'Technology mapping'],
    ['placing', 'Placement'],
    ['export', 'Export'],
  ]);

  constructor(
    private apiService: ApiService,
    private projectService: ProjectService,
    private domSanitizer: DomSanitizer
  ) {}

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

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        this.headline = this.domSanitizer.bypassSecurityTrustUrl(reader.result as string);
      },
      false
    );

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  private getHeadline() {
    let results = this.map.get('placing');
    for (let result of results) {
      if (result.name === 'dnaplotlib' && result.file.endsWith('png')) {
        this.apiService.getResult(this.projectService.project.name, result.file).subscribe((data) => {
          this.createImageFromBlob(data);
        });
      }
    }
  }

  mapImageFromBlob(image: Blob, file: string) {
    let reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        this.blobs.set(file, this.domSanitizer.bypassSecurityTrustUrl(reader.result as string));
      },
      false
    );

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  private getImages() {
    for (let result of this.results) {
      if (result.file.endsWith('png')) {
        this.apiService.getResult(this.projectService.project.name, result.file).subscribe((data) => {
          this.mapImageFromBlob(data, result.file);
        });
      }
    }
  }

  ngOnInit(): void {
    this.getHeadline();
  }

  ngOnChanges(): void {
    this.groupResultsByStage();
    this.getImages();
  }
}
