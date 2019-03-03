import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SessionService } from '../session.service';
import { SynBioHubService } from '../synbiohub.service';

@Component({
    selector: 'app-export',
    templateUrl: './export.page.html',
    styleUrls: ['./export.page.scss'],
})
export class ExportPage implements OnInit {

    public form: FormGroup;
    public registry: string;

    constructor(
        private formBuilder: FormBuilder,
        public session: SessionService,
        public synbiohub: SynBioHubService,
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
        this.synbiohub.login(this.form.value, this.registry).subscribe(
            result => {

            }
        );
    }

}
