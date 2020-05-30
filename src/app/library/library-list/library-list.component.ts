import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/api/api.service';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { UserConstraintsFile } from '../shared/user-constraints-file.model';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.scss'],
})
export class LibraryListComponent implements OnInit {
  SelectionType = SelectionType;
  ColumnMode = ColumnMode;

  libraries: UserConstraintsFile[];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.userConstraintsFiles().subscribe((data) => {
      this.libraries = data;
    });
  }
}
