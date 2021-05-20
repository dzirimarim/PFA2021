import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { TUser } from '../models/TUser';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

 baseUrl = 'http://localhost:8080/api/public/auth/'
  constructor(private http: HttpClient) { }
  signup(user: TUser) {
    console.log(user)
    return this.http.post<any>(this.baseUrl + 'signup', user)
      .pipe(map(user => {

        return user;
      }));
  }
  
  addUser(user : any) {
    return this.http.post<any>(this.baseUrl + "signup", user).pipe(map(
      user => {
        return user;
      },
      catchError(err => {

        const error = err.error.message || err.statusText;
        return (error);
      }
      )))
  }
  editUser(user : any) {
    return this.http.post<any>(this.baseUrl + "edit", user).pipe(map(
      user => {
        return user;
      },
      catchError(err => {

        const error = err.error.message || err.statusText;
        return (error);
      }
      )))
  }
}
