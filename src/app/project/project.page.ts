import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ProjectService } from '../project.service';

@Component({
    selector: 'app-project',
    templateUrl: 'project.page.html',
    styleUrls: ['project.page.scss']
})
export class ProjectPage {

    constructor(
        private alertController: AlertController,
        public project: ProjectService,
    ) { }

    async submit() {
        const alert = await this.alertController.create({
            header: 'Submit',
            inputs: [
                {
                    name: 'name',
                    placeholder: 'project name',
                }
            ],
            buttons: [
                {
                    text: 'Submit',
                    handler: (data) => {
                        this.project.project.name = data.name;
                        this.project.submit();
                    }
                }
            ]
        });
        return await alert.present();
    }


    isEmptyObject(obj) {
        return Object.keys(obj).length === 0;
    }

}
