import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    // private baseUrl = "http://127.0.0.1:8080/";
    // private baseUrl = "http://128.197.47.203:8080/";
    private baseUrl = "";

    public token: string | null = null;

    constructor(
        private http: HttpClient,
        private storage: Storage,
    ) {
        this.getLoginInfo().then((data) => {
            this.token = data;
        });
    }

    getLoginInfo(): Promise<string> {
        return this.storage.get('token');
    }

    setLoginInfo(token: string) {
        this.token = token;
        this.storage.set('token', token);
    }

    logout() {
        this.token = null;
        this.storage.remove('token');
    }

    /////////
    // API //
    /////////

    login(body: { username: string, password: string }): Observable<HttpResponse<any>> {
        const url = this.baseUrl + 'login';
        return this.http.post<object>(url, body, { observe: 'response' });
    }

    signup(body: { username: string, password: string }): Observable<HttpResponse<any>> {
        const url = this.baseUrl + 'users/signup';
        return this.http.post<object>(url, body, { observe: 'response' });
    }

	ucfs(): Observable<object[]> {
        const url = this.baseUrl + 'resources/ucfs';
        return this.http.get<object[]>(url, { headers: { "Authorization": this.token } });
    }

    projects(): Observable<object[]> {
        const url = this.baseUrl + 'projects';
        return this.http.get<object[]>(url, { headers: { "Authorization": this.token } });
    }

    specify(body: object, project: string): Observable<any> {
        const url = this.baseUrl + 'project/' + encodeURIComponent(project) + '/specify';
        return this.http.post<object>(url, body, { headers: { "Authorization": this.token } });
    }

    execute(project: string): Observable<any> {
        const url = this.baseUrl + 'project/' + encodeURIComponent(project) + '/execute';
        return this.http.get(url, { headers: { "Authorization": this.token } });
    }

    results(project: string): Observable<object[]>;
    results(project: string, file: string): Observable<Blob>;
    results(project: string, file?: string): Observable<any> {
        let url = this.baseUrl + 'results/' + encodeURIComponent(project);
        let responseType = 'json';
        if (file) {
            url += '/' + encodeURIComponent(file);
            responseType = 'text';
        }
        let rtn = this.http.get(url, { headers: { "Authorization": this.token }, responseType: responseType as 'json' });
        return rtn;
    }

}
