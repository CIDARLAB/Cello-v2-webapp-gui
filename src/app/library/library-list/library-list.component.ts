import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ApiService } from '@app/api/api.service';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { UserConstraintsFileDescriptor } from '../shared/user-constraints-file.model';
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

  @Input()
  libraries: UserConstraintsFileDescriptor[];

  library: UserConstraintsFileDescriptor[] = [];

  @Output()
  selected = new EventEmitter<UserConstraintsFileDescriptor>();

  constructor(private apiService: ApiService, private modalController: ModalController) {}

  ngOnInit(): void {}

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

  select(event: any) {
    this.selected.emit(event.selected[0]);
  }
}
