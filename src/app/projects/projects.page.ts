import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.page.html',
    styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

    public projects: object[];

    constructor(
        private router: Router,
        public api: ApiService,
        public project: ProjectService,
        private menuController: MenuController,
    ) {
    }

    ionViewWillEnter() {
        this.menuController.enable(false);
        this.api.getLoginInfo().then((data: { token: string, session: string }) => {
            this.api.session = data;
        }).then(() => {
            this.api.projects(this.api.session).subscribe((result) => {
                this.projects = result;
            });
        });
    }

    ngOnInit() {
    }

    create() {
        this.project.disable("Results");
        this.project.project = new Project();
        this.router.navigateByUrl("verilog");
    }

}
