import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController, Platform } from '@ionic/angular';
import { ApiService } from './api.service';
import { Storage } from '@ionic/storage';
import { ProjectService } from './project.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {

    constructor(
        private menuController: MenuController,
        private router: Router,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private storage: Storage,
        public api: ApiService,
        public project: ProjectService,
        private platform: Platform,
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready()
            .then(() => {
                this.menuController.enable(false);
                return this.initializeStorage();
            })
            .then(() => {
                return this.api.getLoginInfo();
            })
            .then(() => {
                if (this.api.session) {
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
                    console.log('Read dbOpen from db successful');
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
