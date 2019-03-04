import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiService } from './api.service';
import { Project } from './project';
import { SynBioHubService } from './synbiohub.service';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

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
        private api: ApiService,
        private toastController: ToastController,
        private router: Router,
    ) {
        this.registry = 'https://synbiohub.programmingbiology.org/';
        this.collection = 'https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/Eco1C1G1T1_collection/1';
        this.synbiohub.collections(this.registry).subscribe((result) => {
            this.collections = result;
        });
        this.api.getLoginInfo().then((data) => {
            this.api.session = data;
        });
        this.getSettingsDefinition().then((data) => {
            this.settingsDefinition = data;
        });
        this.project = new Project();
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

    async submit() {
        // const loading = await this.loadingController.create({
        //     message: 'Submitting specification...',
        // });
        const submitting = await this.toastController.create({
            message: "Sending specification and building library.",
            position: 'bottom',
            showCloseButton: true,
            duration: 5000,
        });
        const submitted = await this.toastController.create({
            message: "Job submitted. Results will appear after successful execution.",
            position: 'bottom',
            showCloseButton: true,
            duration: 5000,
        });
        const name = this.project.name;
        return Promise.resolve()
            .then(() => {
                let body = {
                    name: name,
                    specification: this.specification()
                };
                submitting.present();
                body = Object.assign(this.api.session, body);
                return this.api.specify(body).toPromise();
            })
            .then(() => {
                submitted.present();
                let body = {
                    name: name,
                };
                body = Object.assign(this.api.session, body);
                return this.api.execute(body).toPromise();
            })
            .then(() => {
                let body = {
                    name: name,
                }
                body = Object.assign(this.api.session, body);
                if (this.project.name == name) {
                    this.api.results(body).subscribe((result) => {
                        console.log(result);
                        this.project.results = result;
                    });
                    // this.app.activate('Results');
                    this.router.navigateByUrl("results");
                }
            });
    }

}
