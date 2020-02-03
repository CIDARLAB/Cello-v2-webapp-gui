import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ApiService } from '../api.service';
import { ProjectService } from '../project.service';

@Component({
    selector: 'app-library',
    templateUrl: './library.page.html',
    styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {

    private height: number;
    public mode: string;

    constructor(
        private platform: Platform,
        public api: ApiService,
        public project: ProjectService,
    ) {
        this.height = this.platform.height() - 275;
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
