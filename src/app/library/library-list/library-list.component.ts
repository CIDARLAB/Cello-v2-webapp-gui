import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/api/api.service';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { UserConstraintsFile } from '../shared/user-constraints-file.model';
import { ModalController } from '@ionic/angular';
import { LibraryDetailsComponent } from '../library-details/library-details.component';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.scss'],
})
export class LibraryListComponent implements OnInit {
  SelectionType = SelectionType;
  ColumnMode = ColumnMode;

  libraries: UserConstraintsFile[];
  selected: UserConstraintsFile[] = [];

  constructor(private apiService: ApiService, private modalController: ModalController) {}

  ngOnInit(): void {
    this.apiService.userConstraintsFiles().subscribe((data) => {
      this.libraries = data;
      this.selected = [this.libraries[1]];
    });
  }

  async details(library: object, event: any) {
    event.stopPropagation(); // https://github.com/swimlane/ngx-datatable/issues/661
    const modal = await this.modalController.create({
      component: LibraryDetailsComponent,
      componentProps: {
        library: library,
      },
    });
    return await modal.present();
  }

  download(library: object, event: any) {
    event.stopPropagation(); // https://github.com/swimlane/ngx-datatable/issues/661
  }
}
