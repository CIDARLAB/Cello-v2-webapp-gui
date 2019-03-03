import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SynBioHubService {

    public token: string;

    constructor(
        private http: HttpClient,
    ) { }

    login(body: any, registry: string) {
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': 'text/plain',
            })
        };
        return this.http.post<object>(registry + 'login', JSON.stringify(body), options);
    }

    collections(registry: string): Observable<object[]> {
        return this.http.get<object[]>(registry + 'rootCollections');
    }

}
