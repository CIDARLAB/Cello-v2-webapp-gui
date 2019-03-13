import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(
        private router: Router,
        private api: ApiService,
    ) { }

    ionViewDidEnter() {
        // if (this.api.session) {
        //     this.router.navigateByUrl("projects");
        // }
    }

}
