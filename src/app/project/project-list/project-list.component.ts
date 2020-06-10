import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/api/api.service';
import { Project } from '../shared/project.model';
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  public projects: Project[];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }

  download(project: string) {
    this.apiService.getProjectArchive(project).subscribe((data) => {
      let blob: any = new Blob([data], { type: 'application/zip' });
      fileSaver.saveAs(blob, project + '.zip');
      // const url = window.URL.createObjectURL(blob);
      // window.location.href = url;
    });
  }
}
