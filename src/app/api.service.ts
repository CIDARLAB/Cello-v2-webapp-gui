import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    // private baseUrl = "http://127.0.0.1:8080/";
    private baseUrl = "http://128.197.47.203:8080/";
    // private baseUrl = "";

    public session: { session: string, token: string } | null = null;

    constructor(
        private http: HttpClient,
        private storage: Storage,
    ) {

    }

    getLoginInfo(): Promise<object> {
        return this.storage.get('session');
    }

    setLoginInfo(session: { session: string, token: string }) {
        this.session = session;
        this.storage.set('session', session);
    }

    logout() {
        this.session = null;
        this.storage.remove('session');
    }

    /////////
    // API //
    /////////

    login(body: { session: string, token: string }): Observable<object> {
        const url = this.baseUrl + 'login';
        return this.http.post<object>(url, body);
    }

    signup(body: object): Observable<object> {
        const url = this.baseUrl + 'signup';
        return this.http.post<object>(url, body);
    }

    projects(body: { session: string, token: string }): Observable<object[]> {
        const url = this.baseUrl + 'projects';
        return this.http.post<object[]>(url, body);
    }

    specify(body: { session: string, token: string, specification: object }, project: string): Observable<object> {
        const url = this.baseUrl + 'specify/' + encodeURIComponent(project);
        return this.http.post<object>(url, body);
    }

    execute(body: { session: string, token: string }, project: string): Observable<object> {
        const url = this.baseUrl + 'execute/' + encodeURIComponent(project);
        return this.http.post<object>(url, body);
    }

    results(body: any, project: string): Observable<object[]>;
    results(body: any, project: string, file: string): Observable<Blob>;
    results(body: any, project: string, file?: string): Observable<any> {
        let url = this.baseUrl + 'results/' + encodeURIComponent(project);
        let responseType = 'json';
        if (file) {
            url += '/' + encodeURIComponent(file);
            responseType = 'text';
        }
        let rtn = this.http.post(url, body, { responseType: responseType as 'json' });
        return rtn;
    }

}
