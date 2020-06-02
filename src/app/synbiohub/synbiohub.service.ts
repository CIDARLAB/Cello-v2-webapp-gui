import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '@app/api/api.service';
import { Observable } from 'rxjs';
import { Credentials, CredentialsService } from '@app/auth';

@Injectable({
  providedIn: 'root',
})
export class SynBioHubService {
  public token: string;
  public registries: string[] = [
    'https://synbiohub.cidarlab.org/',
    'https://synbiohub.org/',
    'https://synbiohub.programmingbiology.org/',
    'https://synbiohub.utah.edu/',
  ];
  public collections: string[] = [];

  constructor(
    private httpClient: HttpClient,
    private apiService: ApiService,
    private credentialsService: CredentialsService
  ) {}

  login(body: { email: string; password: string }, registry: string): Observable<string> {
    const credentials: Credentials = this.credentialsService.credentials;
    const url = '/synbiohub/login?u=' + encodeURIComponent(registry);
    return this.httpClient.post<string>(url, body, {
      headers: { Authorization: credentials.token },
      responseType: 'text' as 'json',
    });
  }

  getCollections(registry: string, personal?: boolean): Observable<object[]> {
    const credentials: Credentials = this.credentialsService.credentials;
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
    headers['Authorization'] = credentials.token;
    if (this.token && personal) {
      headers['X-authorization'] = this.token;
    }
    const url = '/synbiohub/collections?u=' + encodeURIComponent(registry);
    return this.httpClient.get<object[]>(url, { headers: headers });
  }

  submit(
    body: {
      collection: {
        id: string;
        version: string;
        name: string;
        description: string;
        citations: string;
        overwrite: boolean;
      };
    },
    project: string,
    file: string,
    registry: string
  ): Observable<string>;
  submit(
    body: {
      collection: { uri: string; overwrite: boolean };
    },
    project: string,
    file: string,
    registry: string
  ): Observable<string>;
  submit(body: any, project: string, file: string, registry: string): Observable<string> {
    const credentials: Credentials = this.credentialsService.credentials;
    const url =
      '/synbiohub/submit/' +
      encodeURIComponent(project) +
      '/' +
      encodeURIComponent(file) +
      '?u=' +
      encodeURIComponent(registry);
    const options = {
      headers: { Authorization: credentials.token, 'X-authorization': this.token },
    };
    return this.httpClient.post<string>(url, body, options);
  }
}
