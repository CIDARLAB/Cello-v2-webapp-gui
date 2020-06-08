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

  loadLibraries() {
    this.apiService.getUserConstraintsFiles().subscribe((data) => {
      this.libraries = data;
    });
  }

  ngOnInit(): void {
    this.loadLibraries();
  }

  onFileInput(event: any) {
    let file = event.target.files[0];
    let reader = new FileReader();
    let self = this;
    reader.onload = (function (theFile) {
      return function (e: any) {
        let json = JSON.parse(e.target.result);
        self.apiService
          .addUserConstraintsFile(json)
          .pipe(
            finalize(() => {
              self.loadLibraries();
            })
          )
          .subscribe();
      };
    })(file);
    reader.readAsText(file);
  }

  onSelected(library: UserConstraintsFileDescriptor) {
    this.projectService.project.library.userConstraintsFile = library;
  }
}
