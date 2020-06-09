import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginContext, SignupContext } from '@app/auth/authentication.service';
import { Credentials, CredentialsService } from '@app/auth/credentials.service';
import { InputSensorFileDescriptor } from '@app/library/shared/input-sensor-file-descriptor.model';
import { OutputDeviceFileDescriptor } from '@app/library/shared/output-device-file-descriptor.model';
import { UserConstraintsFileDescriptor } from '@app/library/shared/user-constraints-file-descriptor.model';
import { Project } from '@app/project/shared/project.model';
import { Result } from '@app/project/shared/result.model';
import { Settings } from '@app/settings/shared/settings.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// TODO scrub this or use format strings
const routes = {
  login: '/login',
  signup: '/users',
  projects: '/projects',
  userConstraintsFiles: '/resources/user-constraints-files',
  inputSensorFiles: '/resources/input-sensor-files',
  outputDeviceFiles: '/resources/output-device-files',
  settings: '/resources/settings',
  versionApi: '/version-api',
  versionCore: '/version-core',
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient, private credentialsService: CredentialsService) {}

  ////////////////////
  // Authentication //
  ////////////////////

  login(context: LoginContext): Observable<string> {
    return this.httpClient
      .post<string>(routes.login, context, { observe: 'response' })
      .pipe(map((response: any) => response.headers.get('Authorization')));
  }

  signup(context: SignupContext): Observable<string> {
    return this.httpClient
      .post<string>(routes.signup, context, { observe: 'response' })
      .pipe(map((response: any) => response.headers.get('Authorization')));
  }

  ///////////////
  // Resources //
  ///////////////

  getUserConstraintsFiles(): Observable<UserConstraintsFileDescriptor[]> {
    const credentials: Credentials = this.credentialsService.credentials;
    return this.httpClient
      .get<UserConstraintsFileDescriptor[]>(routes.userConstraintsFiles, {
        headers: { Authorization: credentials.token },
      })
      .pipe(map((data) => data.map((data) => new UserConstraintsFileDescriptor().deserialize(data))));
  }

  addUserConstraintsFile(body: string | ArrayBuffer): Observable<any> {
    const credentials: Credentials = this.credentialsService.credentials;
    return this.httpClient.post(routes.userConstraintsFiles, body, { headers: { Authorization: credentials.token } });
  }

  // TODO String format in routes
  getUserConstraintsFile(fileName: string): Observable<Blob> {
    const credentials: Credentials = this.credentialsService.credentials;
    return this.httpClient.get(routes.userConstraintsFiles + '/' + encodeURIComponent(fileName), {
      headers: { Authorization: credentials.token },
      responseType: 'blob',
    });
  }

  deleteUserConstraintsFile(fileName: string): Observable<any> {
    const credentials: Credentials = this.credentialsService.credentials;
    return this.httpClient.delete(routes.userConstraintsFiles + '/' + encodeURIComponent(fileName), {
      headers: { Authorization: credentials.token },
    });
  }

  getInputSensorFiles(): Observable<InputSensorFileDescriptor[]> {
    const credentials: Credentials = this.credentialsService.credentials;
    return this.httpClient
      .get<InputSensorFileDescriptor[]>(routes.inputSensorFiles, { headers: { Authorization: credentials.token } })
      .pipe(map((data) => data.map((data) => new InputSensorFileDescriptor().deserialize(data))));
  }

  addInputSensorFile(body: string | ArrayBuffer): Observable<any> {
    const credentials: Credentials = this.credentialsService.credentials;
    return this.httpClient.post(routes.inputSensorFiles, body, { headers: { Authorization: credentials.token } });
  }

  // TODO String format in routes
  getInputSensorFile(fileName: string): Observable<Blob> {
    const credentials: Credentials = this.credentialsService.credentials;
    return this.httpClient.get(routes.inputSensorFiles + '/' + encodeURIComponent(fileName), {
      headers: { Authorization: credentials.token },
      responseType: 'blob',
    });
  }

  deleteInputSensorFile(fileName: string): Observable<any> {
    const credentials: Credentials = this.credentialsService.credentials;
    return this.httpClient.delete(routes.inputSensorFiles + '/' + encodeURIComponent(fileName), {
      headers: { Authorization: credentials.token },
    });
  }

  getOutputDeviceFiles(): Observable<OutputDeviceFileDescriptor[]> {
    const credentials: Credentials = this.credentialsService.credentials;
    return this.httpClient
      .get<OutputDeviceFileDescriptor[]>(routes.outputDeviceFiles, { headers: { Authorization: credentials.token } })
      .pipe(map((data) => data.map((data) => new OutputDeviceFileDescriptor().deserialize(data))));
  }

  addOutputDeviceFile(body: string | ArrayBuffer): Observable<any> {
    const credentials: Credentials = this.credentialsService.credentials;
    return this.httpClient.post(routes.outputDeviceFiles, body, { headers: { Authorization: credentials.token } });
  }

  // TODO String format in routes
  getOutputDeviceFile(fileName: string): Observable<Blob> {
    const credentials: Credentials = this.credentialsService.credentials;
    return this.httpClient.get(routes.outputDeviceFiles + '/' + encodeURIComponent(fileName), {
      headers: { Authorization: credentials.token },
      responseType: 'blob',
    });
  }

  deleteOutputDeviceFile(fileName: string): Observable<any> {
    const credentials: Credentials = this.credentialsService.credentials;
    return this.httpClient.delete(routes.outputDeviceFiles + '/' + encodeURIComponent(fileName), {
      headers: { Authorization: credentials.token },
    });
  }

  getSettings(): Observable<Settings> {
    const credentials: Credentials = this.credentialsService.credentials;
    return this.httpClient
      .get<Settings>(routes.settings, { headers: { Authorization: credentials.token } })
      .pipe(map((data) => new Settings().deserialize(data)));
  }

  //////////////
  // Projects //
  //////////////

  /**
   * Get available projects.
   */
  getProjects(): Observable<Project[]> {
    const credentials: Credentials = this.credentialsService.credentials;
    return this.httpClient
      .get<Project[]>(routes.projects, { headers: { Authorization: credentials.token } })
      .pipe(map((data) => data.map((data) => new Project().deserialize(data))));
  }

  /**
   * Create a new project.
   * @param project The name of the project.
   */
  createProject(project: Project): Observable<any> {
    const credentials: Credentials = this.credentialsService.credentials;
    return this.httpClient.post(routes.projects, project, { headers: { Authorization: credentials.token } });
  }

  /**
   * Get a zip file as a Blob containing all project files.
   * @param projectName
   */
  getProjectArchive(projectName: string): Observable<Blob> {
    const credentials: Credentials = this.credentialsService.credentials;
    return this.httpClient.get(routes.projects + '/' + encodeURIComponent(projectName), {
      headers: { Authorization: credentials.token },
      responseType: 'blob',
    });
  }

  deleteProject(projectName: string): Observable<any> {
    const credentials: Credentials = this.credentialsService.credentials;
    return this.httpClient.delete(routes.projects + '/' + encodeURIComponent(projectName), {
      headers: { Authorization: credentials.token },
    });
  }

  getProjectResults(projectName: string): Observable<Result[]> {
    const credentials: Credentials = this.credentialsService.credentials;
    return this.httpClient
      .get<Result[]>(routes.projects + '/' + encodeURIComponent(projectName) + '/results', {
        headers: { Authorization: credentials.token },
      })
      .pipe(map((data) => data.map((data) => new Result().deserialize(data))));
  }

  // TODO String format in routes
  getResult(projectName: string, fileName: string): Observable<Blob> {
    const credentials: Credentials = this.credentialsService.credentials;
    return this.httpClient.get(
      routes.projects + '/' + encodeURIComponent(projectName) + '/' + encodeURIComponent(fileName),
      { headers: { Authorization: credentials.token }, responseType: 'blob' }
    );
  }

  /////////////
  // Version //
  /////////////

  getApiVersion(): Observable<string> {
    const credentials: Credentials = this.credentialsService.credentials;
    return this.httpClient.get<string>(routes.versionApi, { headers: { Authorization: credentials.token } });
  }

  getCoreVersion(): Observable<string> {
    const credentials: Credentials = this.credentialsService.credentials;
    return this.httpClient.get<string>(routes.versionApi, { headers: { Authorization: credentials.token } });
  }
}
