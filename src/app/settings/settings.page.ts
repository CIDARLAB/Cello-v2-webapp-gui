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
        private session: SessionService
    ) {
    }

    ionViewWillEnter() {
        this.menuController.enable(true);
    }

    ngOnInit() {
    }

    getApplicationStages(name) {
        for (let i = 0; i < this.session.settings['applications'].length; i++) {
            if (this.session.settings['applications'][i].name == name) {
                return this.session.settings['applications'][i].stages;
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
