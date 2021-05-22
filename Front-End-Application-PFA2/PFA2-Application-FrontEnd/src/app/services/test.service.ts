import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private categories !: Category[]
  baseUrl !: string ;
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
  }}