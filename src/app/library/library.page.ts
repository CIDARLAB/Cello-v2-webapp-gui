import { Component, OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { SessionService } from '../session.service';

@Component({
    selector: 'app-library',
    templateUrl: './library.page.html',
    styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {

    private height: number;

    public collections = [];

    constructor(
        private platform: Platform,
        private session: SessionService,
        private menuController: MenuController,
    ) {
        this.height = this.platform.height() - 275;
    }

    ionViewWillEnter() {
        this.menuController.enable(true);
    }

    ngOnInit() {
    }

}
