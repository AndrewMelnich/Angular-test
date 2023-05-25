import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Session, User } from '../models/session';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  session$ = new BehaviorSubject<Session>(
    JSON.parse(localStorage.getItem('session') || '{}')
  );

  isLoggedIn$ = new BehaviorSubject<boolean>(
    this.session$.value?.token ? true : false
  );

  setSession(session: Session) {
    this.session$.next(session);
    localStorage.setItem('session', JSON.stringify(session));
    this.isLoggedIn$.next(true);
  }

  registration(user: User): Observable<Session> {
    return this.http.post<Session>('https://reqres.in/api/register', user).pipe(
      tap((session) => {
        this.setSession(session);
      }),
      catchError(this.errorHandler)
    );
  }
  logout(): void {
    this.isLoggedIn$.next(false);
    this.session$.next({
      id: null,
      token: '',
    });
    localStorage.removeItem('session');
  }

  login(user: User): Observable<Session> {
    return this.http.post<Session>('https://reqres.in/api/login', user).pipe(
      tap((session) => {
        this.setSession(session);
      }),
      catchError(this.errorHandler)
    );
  }

  private errorHandler(error: HttpErrorResponse) {
    return throwError(() => error.message);
  }
}
