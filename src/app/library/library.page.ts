import { Component, OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';

@Component({
    selector: 'app-library',
    templateUrl: './library.page.html',
    styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {

    private height: number;

    constructor(
        private menuController: MenuController,
        private platform: Platform
    ) {
        this.height = this.platform.height() - 275;
    }

    ionViewWillEnter() {
        this.menuController.enable(true);
    }

    ngOnInit() {
    }

}
