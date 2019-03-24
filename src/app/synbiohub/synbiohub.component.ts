import { Component, OnInit, Input } from '@angular/core';
import { SynBioHubService } from '../synbiohub.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProjectService } from '../project.service';
import { AlertController, ToastController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
    selector: 'app-synbiohub',
    templateUrl: './synbiohub.component.html',
    styleUrls: ['./synbiohub.component.scss'],
})
export class SynBioHubComponent implements OnInit {

    @Input() public result: object | null = null;

    public registry: string;
    public collections: object[];
    public loginForm: FormGroup;
    public addToCollection: FormGroup;
    public createCollection: FormGroup;
    public mode: string;

    constructor(
        private alertController: AlertController,
        private api: ApiService,
        private formBuilder: FormBuilder,
        private toastController: ToastController,
        public project: ProjectService,
        public synbiohub: SynBioHubService,
    ) {
        this.registry = this.project.registry;
        this.mode = "create";
        this.loginForm = this.formBuilder.group({
            email: new FormControl(null, Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new FormControl(null, Validators.required)
        });
        this.createCollection = this.formBuilder.group({
            id: new FormControl(null, Validators.required),
            version: new FormControl(null, Validators.compose([
                Validators.required,
                Validators.pattern('^[0-9]+$')
            ])),
            name: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required),
            citations: new FormControl(),
            overwrite: new FormControl(null, Validators.required)
        });
        this.addToCollection = this.formBuilder.group({
            uri: new FormControl(null, Validators.required),
            overwrite: new FormControl(null, Validators.required),
        });
        if (synbiohub.token)
            this.updateCollections(this.registry, true);
    }

    ngOnInit() { }

    login(body: { email: string, password: string }) {
        this.synbiohub.login(body, this.registry).toPromise()
            .then((data) => {
                this.synbiohub.token = data;
            })
            .then(() => {
                this.updateCollections(this.registry, true);
            });
    }

    updateCollections(registry: string, personal?: boolean) {
        this.synbiohub.collections(registry, personal).subscribe((data) => {
            this.collections = data;
        });
    }

    async alert(message) {
        const alert = await this.alertController.create({
            message: message,
            buttons: ['OK']
        });
        return await alert.present();
    }

    async toast(message: string) {
        const toast = await this.toastController.create({
            message: message,
            position: 'bottom',
            showCloseButton: true,
            duration: 5000,
        });
        return await toast.present();
    }

    submit(collection: any, project: string, file: string) {
        const body = {
            collection: collection,
            session: this.api.session.session,
            token: this.api.session.token,
        };
        this.synbiohub.submit(body, project, file, this.registry).subscribe((data) => {
            this.toast("Succussfully uploaded.");
            this.updateCollections(this.registry, true);
        }, (error) => {
            this.alert(error.error);
        });
    }

    logout() {
        this.synbiohub.token = null;
    }

}
