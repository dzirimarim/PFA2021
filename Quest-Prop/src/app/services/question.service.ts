import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Question } from '../models/Question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {


  form: FormGroup = new FormGroup({
    title: new FormControl(null),
    level: new FormControl(null),
     score: new FormControl(null),
    description: new FormControl(null),
    maxTime: new FormControl(null),
    propositions: new FormControl(null),
    category: new FormControl(null),
    
      })


  initializeFormGroup() {
    this.form.setValue({
      title: '',
    level: '0',
     score: '',
    description: '',
    maxTime: '',
    propositions: [null],
    category: '',
    });
  }


private baseURL = "http://localhost:8080/api/v1/questions/";

constructor(private http:HttpClient , private router : Router) { }
addQuestions(questions:Question[]){
   return this.http.post<any>(this.baseURL +'add' ,questions)
   .subscribe(user => {
   return user;
});
}  
  getNextQuestion(nxTReponseForm: any):Observable<any>{
    return this.http.post(this.baseURL + 'getNextQuestion',nxTReponseForm);
  }
  getAll(){
    return this.http.get(this.baseURL);
  }
  edit(question: any){
    return this.http.post(this.baseURL,[question]);
  }
  remove(id: any){
    
    return this.http.post(this.baseURL +'remove' ,id);
    
  }
}
