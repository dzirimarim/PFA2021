import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  addNewTest(value: any) {
    return this.http.post(this.baseUrl+'api/tests/add', value);
  }

  baseUrl: string = environment.backUrl;
  constructor(private http:HttpClient) { }



  getAllcategory() {
    return this.http.get(this.baseUrl+'api/categories');
  }

 
}
