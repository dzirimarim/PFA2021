import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Category } from '../models/Category';
import { Observable } from 'rxjs';
import { Test } from '../models/Test';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  baseUrl='http://localhost:8080/api/v1/'
  getAllTests(): Observable<any> {
    return this.http.get(this.baseUrl+'alltests');
  }

  addNewTest(test: Test) {
    this.http.post(this.baseUrl+'createnewtest', test).subscribe((response) => {
      console.log('send terminé !');
    });
  }
  private categories !: Category[]
  constructor(private http: HttpClient) {
  }

  getCategories() {
    this.http.get(this.baseUrl+'categories').
      subscribe((response : any ) => {
        if (response !== null) {
          this.categories = response;
        }
        else {
        }
        console.log('recieve terminé !');
        console.log(this.categories);
      },
        (error) => {

        });
    return this.categories;
  }

  getAllcategory(): Observable<Object> {
    return this.http.get(this.baseUrl+'categories');
  }

  getQuestions(): Observable<Object> {
    return this.http.get(this.baseUrl+'getQuestions');
  }

  getTestById(id: any): Observable<Object> {
    let params = new HttpParams().set('id', id);
    return this.http.get(this.baseUrl+'getTestById', { params: params });
  }
  getTest(id: any): Observable<Object> {
    let params = new HttpParams().set('id', id);
    return this.http.get(this.baseUrl+'getnxtfromcandidatnxt', { params: params });
  }

  getNxTSheet(): Observable<Object> {
    return this.http.get(this.baseUrl+'getNxTResonse');
  }
}
