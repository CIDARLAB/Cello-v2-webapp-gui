import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from "@angular/router";
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    private form: FormGroup;

    constructor(
        private session: SessionService,
        private router: Router,
        private formBuilder: FormBuilder,
    ) {
        this.form = this.formBuilder.group({
            email: new FormControl(null, Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new FormControl(null, Validators.required)
        });
    }

    ngOnInit() {
    }

    login() {
        this.session.login(this.form.value).subscribe(
            result => {
                this.session.setLoginInfo(result);
                this.router.navigateByUrl("projects");
            }
        );
    }

}
