import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private base = "http://127.0.0.1:8080/";

    public session: object;

    constructor(
        private http: HttpClient,
        private storage: Storage,
    ) {

    }

    getLoginInfo(): Promise<object> {
        return this.storage.get('session');
    }

    setLoginInfo(session: object) {
        this.session = session;
        this.storage.set('session', session);
    }

    /////////
    // API //
    /////////

    login(body: object): Observable<object> {
        let url = this.base + 'login'
        return this.http.post<object>(url, JSON.stringify(body));
    }

    signup(body: any): Observable<object> {
        let url = this.base + 'signup';
        return this.http.post<object>(url, JSON.stringify(body));
    }

    projects(body: any): Observable<object[]> {
        let url = this.base + 'projects';
        return this.http.post<object[]>(url, JSON.stringify(body));
    }

    specify(body: any): Observable<object> {
        let url = this.base + 'specify'
        return this.http.post<object>(url, JSON.stringify(body));
    }

    execute(body: any): Observable<object> {
        let url = this.base + 'execute';
        return this.http.post<object>(url, JSON.stringify(body));
    }

    results(body: any, name: string): Observable<object[]>;
    results(body: any, name: string, id: string): Observable<string>;
    results(body: any, name: string, id?: string): Observable<any> {
        let url = this.base + 'results/' + name;
        if (id) {
            url += '/' + id;
        }
        return this.http.post<string>(url, JSON.stringify(body));
    }

}
