import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RegisterModel } from '../models/userModel/register-model';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl = environment.backUrl
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || "{}"));
    this.currentUser = this.currentUserSubject.asObservable();
    console.log(this.currentUserValue);
  }
  public get currentUserValue() {
    return this.currentUserSubject.value;
  }
  login(username: string, password: string) {
    return this.http.post<any>(this.baseUrl + `api/public/auth/signin`, { username, password })
      .pipe(map(user => {
        if ((user && user['accessToken'])) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          console.log(localStorage.getItem('currentUser'));
          this.currentUserSubject.next(user);
        }
        console.log(user)
        return user;
      }));
  }
  register1( name : string , username: string, email : string,password: string , address : string ,date : string ){
    return this.http.post<any>(this.baseUrl + 'api/public/auth/signup', {name , username,email , password , address , date })
      .pipe(map(user => {
        console.log(user)
        return user;
      }));
  }
  register( user : RegisterModel ){
    return this.http.post<any>(this.baseUrl + 'api/public/auth/signup', user)
      .pipe(map(user => {
        console.log(user)
        return user;
      }));
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate([""]);
  }
}