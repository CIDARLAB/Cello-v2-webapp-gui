import { Component } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ProjectService } from '../project.service';
import { SubmitPage } from '../submit/submit.page';

@Component({
    selector: 'app-spec',
    templateUrl: 'spec.page.html',
    styleUrls: ['spec.page.scss']
})
export class SpecPage {

    constructor(
        private modalController: ModalController,
        private alertController: AlertController,
        public project: ProjectService,
    ) { }

    // async submitModal() {
    //     const modal = await this.modalController.create({
    //         component: SubmitPage,
    //         cssClass: 'custom-modal',
    //     });
    //     return await modal.present();
    // }

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
