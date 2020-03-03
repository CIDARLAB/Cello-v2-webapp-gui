import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ApiService } from './api.service';
import { ProjectService } from './project.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {

    constructor(
        private platform: Platform,
        private router: Router,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private storage: Storage,
        public api: ApiService,
        public project: ProjectService,
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready()
            .then(() => {
                return this.initializeStorage();
            })
            .then(() => {
                return this.api.getLoginInfo();
            })
            .then(() => {
                if (this.api.token) {
                    this.router.navigateByUrl("projects");
                } else {
                    this.router.navigateByUrl("home");
                }
                this.statusBar.styleDefault();
                this.splashScreen.hide();
            });
    }

    initializeStorage() {
        let self = this;

        function recursive(resolve) {
            self.storage.set('dbOpen', true);
            self.storage.get('dbOpen').then((data) => {
                if (data) {
                    // db ready to use
                    resolve(true);
                } else {
                    //not ready yet loop round and try to initialise again
                    console.log('Read dbOpen from db failed');
                    recursive(resolve);
                }
            });
        }

        return new Promise((resolve) => {
            recursive(resolve);
        });
    }
}
