import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from './project';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SessionService {

    private base = "http://127.0.0.1:8080/";
    public settings: object;

    public project: Project;
    // public session: object;
    public token: string;
    public id: string;

    public registries = [
        'https://synbiohub.org/',
        'https://synbiohub.utah.edu/',
        'https://synbiohub.cidarlab.org/',
        'https://synbiohub.programmingbiology.org/'
    ];
    public registry: string;
    public collection: string;

    public inputConstraints = <{}[]>[];
    public outputConstraints = <{}[]>[];

    constructor(
        private storage: Storage,
        private http: HttpClient
    ) {
        this.registry = 'https://synbiohub.programmingbiology.org/';
        this.collection = 'https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/Eco1C1G1T1_collection/1';
        this.collections(this.registry).subscribe((result) => {
            // this.collections = result;
        });
        this.getLoginInfo().then(data => {
            this.token = data[0];
            this.id = data[1]
        });
        this.getSettingsDefinition().then((data) => {
            this.settings = data;
        });
        this.project = new Project();
    }

    getLoginInfo() {
        let promises = [
            this.storage.get('token'),
            this.storage.get('id'),
        ];
        // return this.storage.get('session');
        return Promise.all(promises);
    }

    setLoginInfo(token: string, id: string) {
        this.token = token;
        this.id = id;
        this.storage.set('token', token);
        this.storage.set('id', id);
    }

    getSettingsDefinition() {
        return new Promise((resolve, reject) => {
            this.http.get('assets/json/settings.json')
                .subscribe((result) => {
                    resolve(result);
                }, (error) => {
                    reject(error);
                });
        });
    }

    collections(registry: string): Observable<object> {
        let url = registry + 'rootCollections';
        return this.http.get(url);
    }

    login(body: object): Observable<object> {
        return this.http.post(this.base + 'login', JSON.stringify(body));
    }

    signup(body: any): Observable<object> {
        return this.http.post(this.base + 'signup', JSON.stringify(body));
    }

    projects(): Observable<object[]> {
        let body = {
            "token": this.token,
            "id": this.id
        };
        return this.http.post<object[]>(this.base + 'projects', JSON.stringify(body));
    }

    specify(body: any) {
        return this.http.post(this.base + 'specify', JSON.stringify(body));
    }

    execute(body: any) {
        return this.http.post(this.base + 'execute', JSON.stringify(body));
    }

}
