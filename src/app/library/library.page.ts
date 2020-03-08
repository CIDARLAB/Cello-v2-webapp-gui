import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ProjectService } from 'src/app/project.service';
import { SelectionType, ColumnMode } from '@swimlane/ngx-datatable';

@Component({
    selector: 'app-library',
    templateUrl: './library.page.html',
    styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {

    public mode: string = 'ucf';

    public selected = [];
    public columns = [{ name: "Organism", prop: "header.organism" }, { name: "Version", prop: "header.version" }];

    public SelectionType = SelectionType;
    public ColumnMode = ColumnMode;

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
