import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SynBioHubService {

    // private baseUrl = "http://127.0.0.1:8080/";
    // private baseUrl = "http://128.197.47.203:8080/";
    private baseUrl = "";
    public token: string;

    constructor(
        private http: HttpClient,
    ) { }

    visualization(uri: string): Observable<string> {
        const url = uri + '/visualization';
        return this.http.get<string>(url, { responseType: 'text' as 'json' });
    }

    sbol(collection: string): Observable<string> {
        const url = collection + '/sbol';
        return this.http.get<string>(url, { responseType: 'text' as 'json' });
    }

    login(body: { email: string, password: string }, registry: string): Observable<string> {
        const url = this.baseUrl + 'synbiohub/login?u=' + encodeURIComponent(registry);
        return this.http.post<string>(url, body, { responseType: 'text' as 'json' });
    }

    collections(registry: string, personal?: boolean): Observable<object[]> {
        let options = {};
        if (this.token && personal) {
            options = { headers: { "X-authorization": this.token } };
        }
        const url = this.baseUrl + 'synbiohub/collections?u=' + encodeURIComponent(registry);
        return this.http.get<object[]>(url, options);
    }

    submit(
        body: {
            collection: {
                id: string,
                version: string,
                name: string,
                description: string,
                citations: string,
                overwrite: boolean
            },
            session: string,
            token: string,
        },
        project: string,
        file: string,
        registry: string,
    ): Observable<string>;
    submit(
        body: {
            collection: { uri: string, overwrite: boolean },
            session: string,
            token: string,
        },
        project: string,
        file: string,
        registry: string,
    ): Observable<string>;
    submit(
        body: any,
        project: string,
        file: string,
        registry: string,
    ): Observable<string> {
        const url = this.baseUrl + 'synbiohub/submit/'
            + encodeURIComponent(project) + '/'
            + encodeURIComponent(file) + '?u='
            + encodeURIComponent(registry);
        const options = { headers: { "X-authorization": this.token } };
        return this.http.post<string>(url, body, options);
    }

}
