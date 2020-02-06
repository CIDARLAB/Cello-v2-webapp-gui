import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class SynBioHubService {

    // private baseUrl = "http://127.0.0.1:8080/";
    private baseUrl = "http://128.197.47.203:8080/";
    // private baseUrl = "";
    public token: string;

    constructor(
        private http: HttpClient,
        private api: ApiService
    ) { }

    login(body: { email: string, password: string }, registry: string): Observable<string> {
        const url = this.baseUrl + 'synbiohub/login?u=' + encodeURIComponent(registry);
        return this.http.post<string>(url, body, { headers: { "Authorization": this.api.token }, responseType: 'text' as 'json' });
    }

    collections(registry: string, personal?: boolean): Observable<object[]> {
        let headers = {};
        // return from(this.api.getLoginInfo()).pipe(
        //     map((result) => {
        //         console.log(result);
        //         headers["Authorization"] = result;
        //         if (this.token && personal) {
        //             headers["X-authorization"] = this.token;
        //         }
        //         const url = this.baseUrl + 'synbiohub/collections?u=' + encodeURIComponent(registry);
        //         return this.http.get<object[]>(url, { headers: headers });
        //     })
        // );
        // return this.api.getLoginInfo().then((data) => {
        //     headers["Authorization"] = data;
        // }).then(() => {
        //     if (this.token && personal) {
        //         headers["X-authorization"] = this.token;
        //     }
        //     const url = this.baseUrl + 'synbiohub/collections?u=' + encodeURIComponent(registry);
        //     return this.http.get<object[]>(url, { headers: headers }).toPromise();
        // });
        headers["Authorization"] = this.api.token;
        if (this.token && personal) {
            headers["X-authorization"] = this.token;
        }
        const url = this.baseUrl + 'synbiohub/collections?u=' + encodeURIComponent(registry);
        return this.http.get<object[]>(url, { headers: headers });
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
        },
        project: string,
        file: string,
        registry: string,
    ): Observable<string>;
    submit(
        body: {
            collection: { uri: string, overwrite: boolean },
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
        const options = { headers: { "Authorization": this.api.token, "X-authorization": this.token } };
        return this.http.post<string>(url, body, options);
    }

}
