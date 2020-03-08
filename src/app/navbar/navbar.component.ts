import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AboutPage } from '../about/about.page';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

    constructor(
        private menuController: MenuController,
        private modalController: ModalController,
        public router: Router,
        public api: ApiService,
        public platform: Platform,
    ) { }

    ngOnInit() { }

    logout() {
        this.api.logout();
        this.menuController.enable(false);
        this.router.navigateByUrl("home");
    }

    async about() {
        const modal = await this.modalController.create({
            component: AboutPage
        });
        return await modal.present();
    }

}
