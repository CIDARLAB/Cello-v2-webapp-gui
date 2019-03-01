import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { SessionService } from '../session.service';

@Component({
    selector: 'app-constraints',
    templateUrl: './constraints.page.html',
    styleUrls: ['./constraints.page.scss'],
})
export class ConstraintsPage implements OnInit {

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

    addInputConstraint() {
        this.session.inputConstraints.push({});
    }

    addOutputConstraint() {
        this.session.outputConstraints.push({});
    }

    onDeleteInput(_event) {
        this.session.inputConstraints = this.session.inputConstraints.filter((i: any) => i.id !== _event.id)
    }

    onDeleteOutput(_event) {
        this.session.outputConstraints = this.session.outputConstraints.filter((i: any) => i.id !== _event.id)
    }

}
