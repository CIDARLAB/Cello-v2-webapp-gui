import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
    providedIn: 'root'
})
export class SessionService {

    public project: Project;
    public token: string;
    public id: string;

    constructor() { }

    // getLoginInfo() {
    //     let promises = [
    //         this.storage.get('token'),
    //         this.storage.get('id'),
    //     ];
    //     return Promise.all(promises);
    // }

    // setLoginInfo(token: string, id: string) {
    //     this.token = token;
    //     this.id = id;
    //     this.storage.set('token', token);
    //     this.storage.set('id', id);
    // }

}
