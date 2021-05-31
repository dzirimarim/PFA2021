import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  baseUrl = environment.backUrl

  submission(value0: any, submissionResult: any) {
    return this.http.post<any>(this.baseUrl + 'api/contests/submit', {value:value0, submission:submissionResult})
  }

  constructor(private http: HttpClient, private router: Router) { }
}
