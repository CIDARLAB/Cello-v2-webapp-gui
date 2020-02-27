import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ApiService } from 'src/app/api.service';
import { ProjectService } from 'src/app/project.service';

@Component({
    selector: 'app-library',
    templateUrl: './library.component.html',
    styleUrls: ['./library.component.scss'],
})
export class LibraryComponent implements OnInit {

    public mode: string;

    constructor(
        public api: ApiService,
        public project: ProjectService,
    ) {
        this.project.register('library', this.valid);
        this.project.updateCollections();
        this.project.updateUserConstraintsFiles();
        this.project.updateInputSensorFiles();
        this.project.updateOutputDeviceFiles();
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

}
