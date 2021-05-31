import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlgoService {
  addNewProblem(formdata: FormData) {
    const httpOptions = {
      headers: new HttpHeaders({
       "Content-Type": "multipart/form-data;boundary=----WebKitFormBoundaryyrV7KO0BoCBuDbTL"
      })
    };
    return this.http.post<any>(this.baseUrl + 'api/contests/problem/add', formdata,httpOptions)
  }
  submission(formdata: FormData, value: any) {
    return this.http.post<any>(this.baseUrl + 'api/contests', { form: formdata, value: value })
  }
  getContestAllLanguages(arg0: number) {
    return this.http.get<any>(this.baseUrl + 'api/contests/languages/' + arg0)
  }
  getContestProblems(arg0: number) {
    return this.http.get<any>(this.baseUrl + 'api/contests/' + arg0)
  }
  baseUrl = environment.backUrl
  constructor(private http: HttpClient, private router: Router) { }
  getAllContests(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'api/contests')
  }
}
