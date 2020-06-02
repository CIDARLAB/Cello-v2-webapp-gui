import { Component, OnInit } from '@angular/core';
import { ProjectService } from '@app/project/project.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  constructor(public projectService: ProjectService) {}

  ngOnInit(): void {}
}
