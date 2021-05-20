import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  baseUrl='http://localhost:8080/'
  private currentUserSubject !: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
      this.currentUser = this.currentUserSubject.asObservable();
      console.log(this.currentUserValue);
  }

  public get currentUserValue(): User {
    //  console.log(this.currentUserSubject.value);

      return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
      return this.http.post<any>(this.baseUrl+`api/public/auth/signin`, { username, password })
          .pipe(map(user => {
              // login successful if there's a jwt token in the response
              if ((user && user['accessToken'])) {
                  // store user details and jwt token in session storage to keep user logged in between page refreshes*
                  localStorage.setItem('currentUser', JSON.stringify(user));
                  console.log(localStorage.getItem('currentUser'));
                  this.currentUserSubject.next(user);


              }


              return user;
          }));
  }

  logout() {
      localStorage.removeItem('currentUser');
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
  }
}
