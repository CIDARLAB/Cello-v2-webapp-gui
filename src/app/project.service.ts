import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { ApiService } from './api.service';
import { Project } from './project';
import { SynBioHubService } from './synbiohub.service';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    public pages = [{
        name: 'Specification',
        active: true,
        pages: [{
            name: 'Settings',
            url: '/settings',
            status: 'None',
            message: '',
        }, {
            name: 'Library',
            url: '/library',
            status: 'None',
            message: '',
        }, {
            name: 'Verilog',
            url: '/verilog',
            status: 'None',
            message: ''
        }, {
            name: 'Constraints',
            url: '/constraints',
            status: 'None',
            message: '',
        }]
    }, {
        name: 'Results',
        active: false,
        pages: [{
            name: 'View',
            url: '/results',
            status: 'None',
            message: ''
        }]
    }];

    public project: Project;

    public settingsDefinition: object;

    public registries = [
        'https://synbiohub.org/',
        'https://synbiohub.utah.edu/',
        'https://synbiohub.cidarlab.org/',
        'https://synbiohub.programmingbiology.org/'
    ];
    public collections = [];
    public registry: string;
    public collection: string;

    public inputConstraints = <{}[]>[];
    public outputConstraints = <{}[]>[];

    constructor(
        private http: HttpClient,
        private synbiohub: SynBioHubService,
        private alertController: AlertController,
        private api: ApiService,
        private toastController: ToastController,
        private router: Router,
    ) {
        this.registry = 'https://synbiohub.programmingbiology.org/';
        this.collection = 'https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/Eco1C1G1T1_collection/1';
        this.updateCollections();
        this.api.getLoginInfo().then((data: { token: string, session: string }) => {
            this.api.session = data;
        });
        this.getSettingsDefinition().then((data) => {
            this.settingsDefinition = data;
        });
        this.project = new Project();
    }

    activate(section: string) {
        for (let s of this.pages) {
            if (s.name == section) {
                s.active = true;
            }
        }
    }

    disable(section: string) {
        for (let s of this.pages) {
            if (s.name == section) {
                s.active = false;
            }
        }
    }

    getSettingsDefinition() {
        return new Promise((resolve, reject) => {
            this.http.get('assets/json/settings.json')
                .subscribe((result) => {
                    resolve(result);
                }, (error) => {
                    reject(error);
                });
        });
    }

    updateCollections() {
        this.synbiohub.collections(this.registry).subscribe((result) => {
            this.collections = result;
        });
    }

    settings(): object {
        let parameters = {};
        for (let stage in this.project.settings.algorithms) {
            parameters[stage] = this.project.settings.algorithms[stage];
        }
        for (let parameter in this.project.settings.parameters) {
            parameters[parameter] = this.project.settings.parameters[parameter];
        }
        let body = { 'application': this.project.application, 'parameters': parameters }
        return body;
    }

    library() {
        let useRegistry = true;
        let body = {
            use_registry: useRegistry,
        };
        if (useRegistry) {
            body['registry'] = this.registry;
            body['collection'] = this.collection;
        }
        return body;
    }

    verilog() {
        return this.project.verilog;
    }

    constraints() {
        let input = {};
        let output = {};
        for (let constraint of this.inputConstraints) {
            input[constraint['input']] = constraint['value']
        }
        for (let constraint of this.outputConstraints) {
            output[constraint['input']] = constraint['value']
        }
        let body = {
            input_constraints: input,
            output_constraints: output
        };
        return body;
    }

    specification(): object {
        let specification = {
            settings: this.settings(),
            library: this.library(),
            verilog: this.verilog(),
            constraints: this.constraints(),
        }
        return specification;
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

    async submit() {
        const name = this.project.name;
        return Promise.resolve()
            .then(() => {
                let body = {
                    session: this.api.session.session,
                    token: this.api.session.token,
                    specification: this.specification()
                };
                this.toast("Sending specification and building library.");
                return this.api.specify(body, name).toPromise();
            })
            .then(() => {
                this.toast("Job submitted. Results will appear after successful execution.");
                const body = this.api.session;
                return this.api.execute(body, name).toPromise();
            })
            .then(() => {
                const body = this.api.session;
                if (this.project.name == name) {
                    this.api.results(body, name).subscribe((result) => {
                        this.project.results = result;
                    });
                    this.activate('Results');
                    this.router.navigateByUrl("results");
                }
            })
            .catch((error) => {
                this.toastController.dismiss();
                this.alert(error.error);
            });
    }

}
