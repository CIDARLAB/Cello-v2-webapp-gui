import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from './project';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class SessionService {

    private base = "http://127.0.0.1:8080/";

    public project: Project;
    public token: string;
    public id: string;

    constructor(
        private storage: Storage,
        private http: HttpClient
    ) { }

    getLoginInfo() {
        let promises = [
            this.storage.get('token'),
            this.storage.get('id'),
        ];
        return Promise.all(promises);
    }

    setLoginInfo(token: string, id: string) {
        this.token = token;
        this.id = id;
        this.storage.set('token', token);
        this.storage.set('id', id);
    }

    login(body: object) {
        return this.http.post(this.base + 'login', JSON.stringify(body));
    }

}
