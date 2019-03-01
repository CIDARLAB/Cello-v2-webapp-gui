import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { MenuController } from '@ionic/angular';
import { Project } from '../project';
import { Router } from '@angular/router';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.page.html',
    styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

    public rows = [
        {
            "name": "Ethel Price",
            "gender": "female",
            "age": 22
        },
        {
            "name": "Claudine Neal",
            "gender": "female",
            "age": 55
        },
        {
            "name": "Beryl Rice",
            "gender": "female",
            "age": 67
        },
        {
            "name": "Simon Grimm",
            "gender": "male",
            "age": 28
        }
    ];

    private projects: object[];

    constructor(
        private session: SessionService,
        private menuController: MenuController,
        private router: Router
    ) {
    }

    ionViewWillEnter() {
        this.menuController.enable(false);
        this.session.getLoginInfo().then((data) => {
            this.session.session = data;
        }).then(() => {
            this.session.projects(this.session.session).subscribe((result) => {
                this.projects = result;
            });
        });
    }

    ngOnInit() {
    }

    create() {
        this.session.project = new Project();
        this.router.navigateByUrl("verilog");
    }

}
