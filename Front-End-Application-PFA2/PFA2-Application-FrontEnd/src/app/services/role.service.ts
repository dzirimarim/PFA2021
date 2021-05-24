import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  baseUrl = 'http://localhost:8080/api/public/roles/'
  constructor(private http:HttpClient) { }
  getRoles():Observable<any>{
    return this.http.get<any>(this.baseUrl).pipe(map(user => {
      return user;
    }));  
  }
}

