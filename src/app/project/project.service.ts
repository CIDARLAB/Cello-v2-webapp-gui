import { Injectable } from '@angular/core';
import { ApiService } from '@app/api/api.service';
import { Observable } from 'rxjs';
import { Project } from './shared/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private apiService: ApiService) {}

  projects(): Observable<Project[]> {
    return this.apiService.projects();
  }
}
