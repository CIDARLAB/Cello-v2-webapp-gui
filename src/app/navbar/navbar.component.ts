import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController, Platform } from '@ionic/angular';
import { AboutPage } from '../about/about.page';
import { ApiService } from '../api.service';

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
    ) {
    }

    ngOnInit() { }

    logout() {
        this.api.logout();
        this.menuController.enable(false);
        this.router.navigateByUrl("home");
    }

    async about() {
        console.log(this.router.url);
        const modal = await this.modalController.create({
            component: AboutPage,
        });
        return await modal.present();
    }

}
