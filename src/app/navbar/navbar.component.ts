import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

    constructor(
        private api: ApiService,
        private router: Router,
        private menuController: MenuController,
    ) {
    }

    ngOnInit() { }

    logout() {
        this.api.logout();
        this.menuController.enable(false);
        this.router.navigateByUrl("home");
    }

}
