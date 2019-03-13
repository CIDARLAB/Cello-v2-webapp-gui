import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

    constructor(
        public project: ProjectService,
    ) {
    }

    ngOnInit() {
    }

    updateDefaults(stage: {}) {
        for (let parameter of this.getAlgorithmParameters(this.project.project.settings.algorithms[stage['name']], stage)) {
            this.project.project.settings.parameters[stage['name'] + '.' + parameter.name] = parameter.value;
        }
    }

    getApplicationStages(name) {
        for (let i = 0; i < this.project.settingsDefinition['applications'].length; i++) {
            if (this.project.settingsDefinition['applications'][i].name == name) {
                return this.project.settingsDefinition['applications'][i].stages;
            }
        }
    }

    getAlgorithmParameters(name, stage) {
        for (let i = 0; i < stage.algorithms.length; i++) {
            if (stage.algorithms[i].name == name) {
                return stage.algorithms[i].parameters;
            }
        }
    }

}
