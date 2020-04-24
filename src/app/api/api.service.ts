import { Injectable } from '@angular/core';
import { LoginContext } from '@app/auth';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

const routes = {
  login: '/login',
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  login(context: LoginContext): Observable<string> {
    const body = { username: context.username, password: context.password };
    return this.httpClient
      .post<string>(routes.login, body, { observe: 'response' })
      .pipe(map((response: any) => response.headers.get('Authorization')));
  }
}
