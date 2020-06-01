import { Component, OnInit } from '@angular/core';
import { ProjectService } from '@app/project/project.service';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss'],
})
export class ResultsListComponent implements OnInit {
  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {}
}
