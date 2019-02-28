import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController, Platform } from '@ionic/angular';
import { SessionService } from './session.service';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {

    private pages = [{
        name: 'Specification',
        active: true,
        pages: [{
            name: 'Settings',
            url: '/settings',
            status: 'None',
            message: '',
        }, {
            name: 'Library',
            url: '/library',
            status: 'None',
            message: '',
        }, {
            name: 'Verilog',
            url: '/verilog',
            status: 'None',
            message: ''
        }, {
            name: 'Constraints',
            url: '/constraints',
            status: 'None',
            message: '',
        }]
    }, {
        name: 'Results',
        active: false,
        pages: [{
            name: 'View',
            url: '/results',
            status: 'None',
            message: ''
        }, {
            name: 'Export',
            url: '/export',
            status: 'None',
            message: ''
        }]
    }];

    constructor(
        private menuController: MenuController,
        private session: SessionService,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private storage: Storage,
        private platform: Platform,
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready()
            .then(() => {
                // this.menuController.enable(false);
                return this.initializeStorage();
            })
            .then(() => {
                return this.session.getLoginInfo();
            })
            .then(() => {
                if (this.session.token) {
                    // this.rootPage = 'ProjectsPage';
                } else {
                    // this.rootPage = 'WelcomePage';
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
