import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    ) {
    }

    ionViewWillEnter() {
        this.api.getLoginInfo().then((data) => {
            this.api.token = data;
            console.log(data);
        }).then(() => {
            this.api.projects().subscribe((result) => {
                this.projects = result;
            });
        });
    }

    ngOnInit() {
    }

    create() {
        this.project.project = new Project();
        this.router.navigateByUrl("spec");
    }

}
