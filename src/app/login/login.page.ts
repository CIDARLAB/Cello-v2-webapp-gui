import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor(
        private session: SessionService,
        private router: Router,
    ) { }

    ngOnInit() {
    }

    login(form) {
        this.session.login(form.value).subscribe(
            result => {
                this.session.setLoginInfo(result["token"], result["id"]);
                this.router.navigateByUrl("projects");
            }
        );
    }

}
