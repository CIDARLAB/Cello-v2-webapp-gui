import { Component, OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
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
        private menuController: MenuController,
    ) {
        this.height = this.platform.height() - 275;
        this.mode = "registry";
    }

    ionViewWillEnter() {
        this.menuController.enable(true);
    }

    ngOnInit() {
    }

}
