import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ProjectService } from 'src/app/project.service';
import { SelectionType, ColumnMode } from '@swimlane/ngx-datatable';
import { ModalController } from '@ionic/angular';
import { LibraryDetailsComponent } from '../library-details/library-details.component';

@Component({
    selector: 'app-library',
    templateUrl: './library.page.html',
    styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {

    public mode: string = 'ucf';

    public selected = [this.project.userConstraintsFiles[1]];

    public SelectionType = SelectionType;
    public ColumnMode = ColumnMode;

    constructor(
        public api: ApiService,
        public project: ProjectService,
        private modalController: ModalController,
    ) {
        this.project.register('library', this.valid);
    }

    public valid = (() => {
        if (this.project.libraryMode === 'registry')
            return this.project.collection && this.project.registry;
        if (this.project.libraryMode === 'ucf') {
            return this.project.userConstraintsFile && this.project.inputSensorFile && this.project.outputDeviceFile;
        }
        return false;
    }).bind(this);

    ngOnInit() {
    }

    async details(library: object, event: any) {
        event.stopPropagation(); // https://github.com/swimlane/ngx-datatable/issues/661
        const modal = await this.modalController.create({
            component: LibraryDetailsComponent,
            componentProps: {
                library: library,
            }
        });
        return await modal.present();
    }

    download(library: object, event: any) {
        event.stopPropagation(); // https://github.com/swimlane/ngx-datatable/issues/661
    }

}
