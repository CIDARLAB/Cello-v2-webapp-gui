import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginContext } from '@app/auth/authentication.service';
import { Credentials, CredentialsService } from '@app/auth/credentials.service';
import { Project } from '@app/project/shared/project.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const routes = {
  login: '/login',
  projects: '/projects',
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient, private credentialsService: CredentialsService) {}

  login(context: LoginContext): Observable<string> {
    const body = { username: context.username, password: context.password };
    return this.httpClient
      .post<string>(routes.login, body, { observe: 'response' })
      .pipe(map((response: any) => response.headers.get('Authorization')));
  }

  projects(): Observable<Project[]> {
    const credentials: Credentials = this.credentialsService.credentials;
    return this.httpClient
      .get<Project[]>(routes.projects, { headers: { Authorization: credentials.token } })
      .pipe(map((data) => data.map((data) => new Project().deserialize(data))));
  }
}
