import { Component, OnInit } from '@angular/core';
import { UserConstraintsFile } from '../shared/user-constraints-file.model';

@Component({
  selector: 'app-library-details',
  templateUrl: './library-details.component.html',
  styleUrls: ['./library-details.component.scss'],
})
export class LibraryDetailsComponent implements OnInit {
  public library: UserConstraintsFile;

  constructor() {}

  ngOnInit(): void {}
}
