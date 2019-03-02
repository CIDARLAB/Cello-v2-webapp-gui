import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.page.html',
    styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

    public form: FormGroup;

    constructor(
        private session: SessionService,
        private router: Router,
        private formBuilder: FormBuilder,
    ) {
        this.form = this.formBuilder.group({
            name: new FormControl(null),
            institution: new FormControl(null),
            email: new FormControl(null, Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new FormControl(null, Validators.required)
        });
    }

    ngOnInit() {
    }

    signup() {
        this.session.signup(this.form.value).subscribe((result) => {
            this.session.setLoginInfo(result);
            this.router.navigateByUrl("projects");
        }, (error) => {
        });
    }

}
