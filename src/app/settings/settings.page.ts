import { Component, OnInit } from '@angular/core';
import { ProjectService } from './../project.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

    constructor(
        public project: ProjectService,
    ) { }

    ngOnInit() {
    }

    applications() {
        return Array.from(this.project.project.settings.applications.keys());
    }

    application() {
        return this.project.project.settings.application;
    }

    stages() {
        return Array.from(this.project.project.settings.applications.get(this.project.project.settings.application).keys());
    }

    algorithms(stage: string) {
        return Array.from(this.project.project.settings.applications.get(this.application()).get(stage).parameters.keys());
    }

    algorithm(stage: string) {
        return this.project.project.settings.applications.get(this.application()).get(stage).algorithm;
    }

    parameters(stage: string, algorithm: string) {
        return Array.from(this.project.project.settings.applications.get(this.application()).get(stage).parameters.get(algorithm).keys());
    }

    parameterValue(stage: string, algorithm: string, parameter: string) {
        console.log(typeof 1 == 'number');
        return this.project.project.settings.applications.get(this.application()).get(stage).parameters.get(algorithm).get(parameter);
    }

    typeOf(value: any) {
        return (typeof value);
    }

}
