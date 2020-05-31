import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/api/api.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  onFileInput(event: any) {
    let file = event.target.files[0];
    let reader = new FileReader();
    let self = this;
    reader.onload = (function (theFile) {
      return function (e: any) {
        let json = JSON.parse(e.target.result);
        self.apiService.userConstraintsFile(json).subscribe();
      };
    })(file);
    reader.readAsText(file);
  }
}
