import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';
import { Test } from '../models/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private categories !: Category[]
  baseUrl !: "http://localhost:8080/api/public" ;
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
  addNewTest(test: Test) {
    this.http.post(this.baseUrl+'createnewtest', test).subscribe((response) => {
      console.log('send terminé !');
    });
  }

  getAllcategory(): Observable<Object> {
    return this.http.get("http://localhost:8080/api/public/categories");
  }}