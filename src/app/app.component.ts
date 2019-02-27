import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { SessionService } from './session.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private session: SessionService,
        // private storage: Storage
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    // initializeStorage() {
    //     let that = this;

    //     function recursive(resolve) {
    //         that.storage.set('dbOpen', true);
    //         that.storage.get('dbOpen').then((data) => {
    //             if (data) {
    //                 // db ready to use
    //                 console.log('Read dbOpen from db successful');
    //                 resolve(true);
    //             } else {
    //                 //not ready yet loop round and try to initialise again
    //                 console.log('Read dbOpen from db failed');
    //                 recursive(resolve);
    //             }
    //         });
    //     }

    //     return new Promise((resolve) => {
    //         recursive(resolve);
    //     });
    // }

}
