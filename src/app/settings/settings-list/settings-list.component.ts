import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/api/api.service';
import { ProjectService } from '@app/project/project.service';

@Component({
  selector: 'app-settings-list',
  templateUrl: './settings-list.component.html',
  styleUrls: ['./settings-list.component.scss'],
})
export class SettingsListComponent implements OnInit {
  // TODO: don't use project service
  constructor(private apiService: ApiService, public projectService: ProjectService) {}

  ngOnInit(): void {
    this.apiService.getSettings().subscribe((data) => {
      this.projectService.project.settings = data;
    });
  }

  typeOf(value: any) {
    return typeof value;
  }
}
