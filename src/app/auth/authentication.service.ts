import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Credentials, CredentialsService } from './credentials.service';
import { ApiService } from '@app/api/api.service';
import { map, mergeAll } from 'rxjs/operators';

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}

export interface SignupContext {
  name: string;
  username: string;
  password: string;
  institution: string;
  remember?: boolean;
}

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private credentialsService: CredentialsService, private apiService: ApiService) {}

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  login(context: LoginContext): Observable<Credentials> {
    return this.apiService.login(context).pipe(
      map((token: string) => {
        let credentials = {
          username: context.username,
          token: token,
        };
        this.credentialsService.setCredentials(credentials, context.remember);
        return of(credentials);
      }),
      mergeAll()
    );
  }

  /**
   * Creates a new user account.
   * @param context The signup parameters.
   * @return The user credentials.
   */
  signup(context: SignupContext): Observable<Credentials> {
    return this.apiService.signup(context).pipe(
      map((token: string) => {
        let credentials = {
          username: context.username,
          token: token,
        };
        this.credentialsService.setCredentials(credentials, context.remember);
        return of(credentials);
      }),
      mergeAll()
    );
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.credentialsService.setCredentials();
    return of(true);
  }
}
