import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ProjectService } from '../project.service';

@Component({
    selector: 'app-constraints',
    templateUrl: './constraints.page.html',
    styleUrls: ['./constraints.page.scss'],
})
export class ConstraintsPage implements OnInit {

    constructor(
        private menuController: MenuController,
        public project: ProjectService,
    ) {
    }

    ionViewWillEnter() {
        this.menuController.enable(true);
    }

    ngOnInit() {
    }

    addInputConstraint() {
        this.project.inputConstraints.push({});
    }

    addOutputConstraint() {
        this.project.outputConstraints.push({});
    }

    onDeleteInput(_event) {
        this.project.inputConstraints = this.project.inputConstraints.filter((i: any) => i.id !== _event.id)
    }

    onDeleteOutput(_event) {
        this.project.outputConstraints = this.project.outputConstraints.filter((i: any) => i.id !== _event.id)
    }

}
