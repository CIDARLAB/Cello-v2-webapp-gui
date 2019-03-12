import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(
        private menuController: MenuController,
        private router: Router,
        private api: ApiService,
    ) {
        if (this.api.session) {
            this.router.navigateByUrl("projects");
        }
    }

    ionViewWillEnter() {
        this.menuController.enable(false);
    }

}
