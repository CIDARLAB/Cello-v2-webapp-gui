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
        return this.http.post<object>(this.base + 'login', JSON.stringify(body));
    }

    signup(body: any): Observable<object> {
        return this.http.post<object>(this.base + 'signup', JSON.stringify(body));
    }

    projects(body: any): Observable<object[]> {
        return this.http.post<object[]>(this.base + 'projects', JSON.stringify(body));
    }

    specify(body: any): Observable<object> {
        return this.http.post<object>(this.base + 'specify', JSON.stringify(body));
    }

    execute(body: any): Observable<object> {
        return this.http.post<object>(this.base + 'execute', JSON.stringify(body));
    }

}
