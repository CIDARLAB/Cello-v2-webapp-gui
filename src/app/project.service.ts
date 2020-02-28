import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { ApiService } from './api.service';
import { Project } from './project';
import { SynBioHubService } from './synbiohub.service';
import { Constraint } from './constraint';
import { Observable } from 'rxjs';
import * as antlr4 from 'antlr4';
import * as Verilog2001Parser from '../assets/editor/parser/Verilog2001Parser.js';
import * as Verilog2001Lexer from '../assets/editor/parser/Verilog2001Lexer.js';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    public project: Project;

    public settingsDefinition: object;

    // Registry
    public registries = [
        'https://synbiohub.org/',
        'https://synbiohub.utah.edu/',
        'https://synbiohub.cidarlab.org/',
        'https://synbiohub.programmingbiology.org/'
    ];
    public collections = [];
    public registry: string;
    public collection: string;

    // UCF
    public userConstraintsFiles = [];
    public userConstraintsFile: string;
    public inputSensorFiles = [];
    public inputSensorFile: string;
    public outputDeviceFiles = [];
    public outputDeviceFile: string;

    public libraryMode = "ucf";

    // verilog
    public sampleVerilog = [
        "and_gate.v",
        "xor_gate.v",
        "struct.v",
        "mixed.v",
        "sub_modules.v",
        "0x01_behavioral.v",
        "0x01.v",
        "0x6F.v",
        "0x78.v",
        "sr_latch.v"
    ];

    public validCallbacks: object;

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
        this.getSettingsDefinition().then((data) => {
            this.settingsDefinition = data;
        });
        this.project = new Project();
        this.validCallbacks = {};
        this.userConstraintsFile = "";
        this.inputSensorFile = "";
        this.outputDeviceFile = "";
    }

    valid(name: string) {
        let callback = this.validCallbacks[name];
        if (callback) {
            return callback();
        }
        return true;
    }

    register(name: string, callback: () => boolean) {
        this.validCallbacks[name] = callback;
    }

    loadVerilog(file: string): Observable<string> {
        return this.http.get<string>('assets/verilog/' + file, { responseType: 'text' as 'json' });
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

    updateUserConstraintsFiles() {
        this.api.userConstraintsFiles().subscribe((result) => {
            this.userConstraintsFiles = result;
        });
    }

    updateInputSensorFiles() {
        this.api.inputSensorFiles().subscribe((result) => {
            this.inputSensorFiles = result;
        });
    }

    updateOutputDeviceFiles() {
        this.api.outputDeviceFiles().subscribe((result) => {
            this.outputDeviceFiles = result;
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
        let f = false;
        if (this.libraryMode === "registry")
            f = true;
        if (this.libraryMode === "ucf")
            f = false;
        let body = {
            use_registry: f,
        };
        if (f) {
            body['registry'] = this.registry;
            body['collection'] = this.collection;
        }
        else {
            body['user_constraints_file'] = this.userConstraintsFile;
            body['input_sensor_file'] = this.inputSensorFile;
            body['output_device_file'] = this.outputDeviceFile;
        }
        return body;
    }

    verilog() {
        return this.project.verilog;
    }

    constraints() {
        let input = {};
        let output = {};
        for (let constraint of this.project.constraints.input) {
            input[constraint.node] = constraint.device
        }
        for (let constraint of this.project.constraints.output) {
            output[constraint.node] = constraint.device
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
                let body = this.specification();
                return this.api.specify(body, name).toPromise();
            })
            .then(() => {
                this.toast("Job submitted. Results will appear after successful execution.");
                return this.api.execute(name).toPromise();
            })
            .then(() => {
                if (this.project.name == name) {
                    this.api.results(name).subscribe((result) => {
                        this.project.results = result.sort((a, b) => (a.name > b.name) ? 1 : -1);
                    });

                    this.toast("Results available.");
                    this.router.navigateByUrl("results");
                }
            })
            .catch((error) => {
                this.toastController.dismiss();
                this.alert(error.error.message);
            });
    }

    private parsePortDeclarations(portDeclarations) {
        let rtn = { input: [], output: [] };
        for (let portDeclaration of portDeclarations) {
            let inputDeclaration = portDeclaration.input_declaration();
            let outputDeclaration = portDeclaration.output_declaration();
            if (inputDeclaration) {
                let listOfPortIdentifiers = inputDeclaration.list_of_port_identifiers();
                rtn.input = rtn.input.concat(this.parsePortIdentifiers(listOfPortIdentifiers));
            }
            if (outputDeclaration) {
                let listOfPortIdentifiers = outputDeclaration.list_of_port_identifiers();
                rtn.output = rtn.output.concat(this.parsePortIdentifiers(listOfPortIdentifiers));
            }
        }
        return rtn;
    }

    private parsePortIdentifiers(listOfPortIdentifierContext) {
        let rtn = [];
        let portIdentifiers = listOfPortIdentifierContext.port_identifier();
        for (let portIdentifier of portIdentifiers) {
            rtn.push(portIdentifier.getText());
        }
        return rtn;
    }

    ports() {
        let stream = new antlr4.InputStream(this.project.verilog);
        let lexer = new Verilog2001Lexer.Verilog2001Lexer(stream);
        let tokens = new antlr4.CommonTokenStream(lexer);
        let parser = new Verilog2001Parser.Verilog2001Parser(tokens);
        let tree = parser.source_text();
        let descriptions = tree.description();
        // FIXME assess heirarchy
        let description = descriptions[descriptions.length - 1];
        // for (let description of descriptions) {
        let moduleDeclaration = description.module_declaration();
        let listOfPorts = moduleDeclaration.list_of_ports();
        let listOfPortDeclarations = moduleDeclaration.list_of_port_declarations();
        if (listOfPorts) {
            let moduleItems = moduleDeclaration.module_item();
            let portDeclarations = [];
            for (let moduleItem of moduleItems) {
                let portDeclaration = moduleItem.port_declaration();
                if (portDeclaration) {
                    portDeclarations.push(portDeclaration);
                }
            }
            return this.parsePortDeclarations(portDeclarations);
        }
        if (listOfPortDeclarations) {
            let portDeclarations = listOfPortDeclarations.port_declaration();
            return this.parsePortDeclarations(portDeclarations);
        }
        // }
    }

}
