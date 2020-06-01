import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/api/api.service';
import { ProjectService } from '@app/project/project.service';
import { UserConstraintsFile } from '../shared/user-constraints-file.model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent implements OnInit {
  libraries: UserConstraintsFile[];

  constructor(private apiService: ApiService, private projectService: ProjectService) {}

  loadLibraries() {
    this.apiService.userConstraintsFiles().subscribe((data) => {
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
          .userConstraintsFile(json)
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

  onSelected(library: UserConstraintsFile) {
    this.projectService.project.library.userConstraintsFile = library;
  }
}
