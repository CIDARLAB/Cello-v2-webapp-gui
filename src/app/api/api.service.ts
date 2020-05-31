import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginContext, SignupContext } from '@app/auth/authentication.service';
import { Credentials, CredentialsService } from '@app/auth/credentials.service';
import { InputSensorFile } from '@app/library/shared/input-sensor-file.model';
import { OutputDeviceFile } from '@app/library/shared/output-device-file.model';
import { UserConstraintsFile } from '@app/library/shared/user-constraints-file.model';
import { Project } from '@app/project/shared/project.model';
import { Result } from '@app/project/shared/result.model';
import { Settings } from '@app/settings/shared/settings.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const routes = {
  login: '/login',
  signup: '/users/signup',
  projects: '/projects',
  userConstraintsFiles: '/resources/user_constraints_files',
  userConstraintsFile: '/resources/user_constraints_file',
  inputSensorFiles: '/resources/input_sensor_files',
  outputDeviceFiles: '/resources/output_device_files',
  settings: '/resources/settings',
  versionApi: '/version/api',
  versionCore: '/version/core',
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient, private credentialsService: CredentialsService) {}

  login(context: LoginContext): Observable<string> {
    const body = {
      username: context.username,
      password: context.password,
    }; // this is to scrub 'remember me' since it's not handled by the backend
    return this.httpClient
      .post<string>(routes.login, body, { observe: 'response' })
      .pipe(map((response: any) => response.headers.get('Authorization')));
  }

  signup(context: SignupContext): Observable<string> {
    const body = {
      username: context.username,
      password: context.password,
      name: context.name,
      institution: context.institution,
    }; // this is to scrub 'remember me' since it's not handled by the backend
    return this.httpClient
      .post<string>(routes.signup, body, { observe: 'response' })
      .pipe(map((response: any) => response.headers.get('Authorization')));
  }

  projects(): Observable<Project[]> {
    const credentials: Credentials = this.credentialsService.credentials;
    return this.httpClient
      .get<Project[]>(routes.projects, { headers: { Authorization: credentials.token } })
      .pipe(map((data) => data.map((data) => new Project().deserialize(data))));
  }

  userConstraintsFiles(): Observable<UserConstraintsFile[]> {
    const credentials: Credentials = this.credentialsService.credentials;
    return this.httpClient
      .get<UserConstraintsFile[]>(routes.userConstraintsFiles, { headers: { Authorization: credentials.token } })
      .pipe(map((data) => data.map((data) => new UserConstraintsFile().deserialize(data))));
  }

  userConstraintsFile(body: string | ArrayBuffer): Observable<any> {
    const credentials: Credentials = this.credentialsService.credentials;
    return this.httpClient.post<object>(routes.userConstraintsFile, body, {
      headers: { Authorization: credentials.token },
    });
  }

  inputSensorFiles(): Observable<InputSensorFile[]> {
    const credentials: Credentials = this.credentialsService.credentials;
    return this.httpClient
      .get<InputSensorFile[]>(routes.inputSensorFiles, { headers: { Authorization: credentials.token } })
      .pipe(map((data) => data.map((data) => new InputSensorFile().deserialize(data))));
  }

  outputDeviceFiles(): Observable<OutputDeviceFile[]> {
    const credentials: Credentials = this.credentialsService.credentials;
    return this.httpClient
      .get<OutputDeviceFile[]>(routes.outputDeviceFiles, { headers: { Authorization: credentials.token } })
      .pipe(map((data) => data.map((data) => new OutputDeviceFile().deserialize(data))));
  }

  settings(): Observable<Settings> {
    const credentials: Credentials = this.credentialsService.credentials;
    return this.httpClient
      .get<Settings>(routes.settings, { headers: { Authorization: credentials.token } })
      .pipe(map((data) => new Settings().deserialize(data)));
  }

  results(): Observable<Result[]> {
    const credentials: Credentials = this.credentialsService.credentials;
    return this.httpClient
      .get<Result[]>(routes.settings, { headers: { Authorization: credentials.token } })
      .pipe(map((data) => data.map((data) => new Result().deserialize(data))));
  }

  versionApi(): Observable<string> {
    const credentials: Credentials = this.credentialsService.credentials;
    return this.httpClient.get<string>(routes.versionApi, { headers: { Authorization: credentials.token } });
  }

  versionCore(): Observable<string> {
    const credentials: Credentials = this.credentialsService.credentials;
    return this.httpClient.get<string>(routes.versionApi, { headers: { Authorization: credentials.token } });
  }
}
