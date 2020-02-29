import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

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
            username: new FormControl(null, Validators.compose([
                Validators.required,
                Validators.pattern("^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$")
            ])),
            password: new FormControl(null, Validators.required)
        });
    }

    ngOnInit() {
    }

    signup() {
        this.api.signup(this.form.value).subscribe((result: HttpResponse<any>) => {
            const token = result.headers.get('Authorization');
            this.api.setLoginInfo(token);
            this.router.navigateByUrl("projects");
        }, (error) => {
        });
    }

}
