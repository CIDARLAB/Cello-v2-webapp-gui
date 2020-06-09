import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/api/api.service';
import { ProjectService } from '@app/project/project.service';
import { UserConstraintsFileDescriptor } from '../shared/user-constraints-file-descriptor.model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent implements OnInit {
  libraries: UserConstraintsFileDescriptor[];

  constructor(private apiService: ApiService, private projectService: ProjectService) {}

  ngOnInit(): void {
    this.getFiles();
  }

  getFiles(): void {
    this.apiService.getUserConstraintsFiles().subscribe((data) => {
      this.libraries = data;
    });
  }

  onFileInput(event: any): void {
    let file = event.target.files[0];
    this.apiService
      .addUserConstraintsFile(file)
      .pipe(
        finalize(() => {
          this.getFiles();
        })
      )
      .subscribe();
  }

  onSelected(library: UserConstraintsFileDescriptor): void {
    this.projectService.project.library.userConstraintsFile = library;
  }
}
