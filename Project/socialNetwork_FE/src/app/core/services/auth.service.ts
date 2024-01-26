import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utente } from '../models/utente.interface';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';
import { AppConfig } from '../configs/app-configs';
import { AuthData } from '../models/authdata.interface';
import { Login } from '../models/login.interface';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  private authSubj = new BehaviorSubject<null | AuthData>(null);
  jwtHelper = new JwtHelperService();
  utente!: Utente | null;
  username!: string;

  constructor(private http: HttpClient, private appConf: AppConfig, private router: Router) { }

  signup(user: Utente): Observable<Utente>{
     return this.http.post<Utente>(`${this.appConf.baseUrl}${this.appConf.endpoints.auth}`, user);
  }

  login(data: Login): Observable<Utente | null> {
    return this.http.post<AuthData>(`${this.appConf.baseUrl}${this.appConf.endpoints.auth}`, data)
      .pipe(
        map((authData: AuthData) => {
          this.isLoggedIn = true;
          this.authSubj.next(authData);
          this.utente = this.jwtHelper.decodeToken(authData.token);
          this.username = authData.utente.username;
          return this.utente;
        }),
        catchError((error) => {
          // Handle authentication error, e.g., redirect to login page
          this.router.navigate(['/login']);
          return of(null);
        })
      ); 
  }

  logout(): void {
    this.isLoggedIn = false;
    this.authSubj.next(null);
    this.utente = null;
    this.username = '';
    this.router.navigate(['/login']);
  }
}


