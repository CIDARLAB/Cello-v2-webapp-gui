import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
    selector: 'app-constraints',
    templateUrl: './constraints.page.html',
    styleUrls: ['./constraints.page.scss'],
})
export class ConstraintsPage implements OnInit {

    constructor(
        private menuController: MenuController,
    ) {
    }

    ionViewWillEnter() {
        this.menuController.enable(true);
    }

    ngOnInit() {
    }

}
