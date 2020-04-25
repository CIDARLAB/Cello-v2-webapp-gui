import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../shared/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  public projects: Project[];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.projects().subscribe((projects) => {
      this.projects = projects;
    });
  }
}
