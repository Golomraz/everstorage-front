import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, firstValueFrom, of, tap, from, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  isLoading = new BehaviorSubject(false);

  private _currentUser: any;
  authAction = new Subject();

  get user() {
    return this._currentUser;
  }

  getCurrentUser() {
    // if (this._currentUser) return from(this._currentUser);

    return this.http.get('users/me').pipe(tap((res) => this._currentUser = res)) ;
  }

  signUp(data) {
   return this.http.post('auth/signup', data).pipe(tap(() => this.authAction.next(null)));
  }

  signIn(data) {
    this.http.post<any>('auth/signin', data).subscribe((res) => {
      console.error(res);
      localStorage.setItem('accessToken', res.accessToken);
      localStorage.setItem('refreshToken', res.refreshToken);

      this._currentUser = {
        username: res.username,
        id: res.id,
      };
      this.router.navigate(['storages']);
      this.authAction.next(null)
    });
  }

  logOut() {
    this.http.get('auth/logout').subscribe(() => {
      localStorage.clear();
      this.router.navigate(['/']);
      this.authAction.next(null)
    });
  }

  refreshToken() {
    return this.http.get<any>('auth/refresh').pipe(
      tap((res) => {
        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('refreshToken', res.refreshToken);
        this.authAction.next(null)
      }),
      catchError(() => {
        localStorage.clear();
        this.router.navigate(['/']);
        this.authAction.next(null)
        return of(false);
      })
    );
  }

  updateUser(user) {
    return this.http.patch(`users/${user._id}`, user);
  }
}
