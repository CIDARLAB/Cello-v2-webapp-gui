import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.page.html',
    styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

    public form: FormGroup;

    constructor(
        private api: ApiService,
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
        this.api.signup(this.form.value).subscribe((result) => {
            this.api.setLoginInfo(result);
            this.router.navigateByUrl("projects");
        }, (error) => {
        });
    }

}
