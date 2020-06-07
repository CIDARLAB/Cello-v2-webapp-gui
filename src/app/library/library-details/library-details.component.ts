import { Component, OnInit } from '@angular/core';
import { UserConstraintsFileDescriptor } from '../shared/user-constraints-file.model';

@Component({
  selector: 'app-library-details',
  templateUrl: './library-details.component.html',
  styleUrls: ['./library-details.component.scss'],
})
export class LibraryDetailsComponent implements OnInit {
  public library: UserConstraintsFileDescriptor;

  constructor() {}

  ngOnInit(): void {}
}
