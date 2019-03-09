import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(
        private api: ApiService,
        private router: Router,
    ) {
        if (this.api.session) {
            this.router.navigateByUrl("projects");
        }
    }

}
