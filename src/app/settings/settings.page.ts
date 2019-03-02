import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { SessionService } from '../session.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

    constructor(
        private menuController: MenuController,
        public session: SessionService
    ) {
    }

    ionViewWillEnter() {
        this.menuController.enable(true);
    }

    ngOnInit() {
    }

    updateDefaults(stage: {}) {
        for (let parameter of this.getAlgorithmParameters(this.session.project.settings.algorithms[stage['name']], stage)) {
            this.session.project.settings.parameters[stage['name'] + '.' + parameter.name] = parameter.value;
        }
    }

    getApplicationStages(name) {
        for (let i = 0; i < this.session.settingsDefinition['applications'].length; i++) {
            if (this.session.settingsDefinition['applications'][i].name == name) {
                return this.session.settingsDefinition['applications'][i].stages;
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
