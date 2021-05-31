
import { Injectable } from '@angular/core';
import { Qcm } from '../models/TestModel/qcm';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  baseUrl: string = environment.backUrl;
  constructor(private http:HttpClient) { }
  addQuestions(questions:Qcm[]){
     return this.http.post<any>(this.baseUrl+'api/createQuestions',questions)
     .subscribe(user => {
     
     return user;
  });
  }
  getNextQuestion(nxTReponseForm:any):Observable<any>{
    return this.http.post(this.baseUrl+'api/getNextQuestion',nxTReponseForm);
    /*.pipe(map(question=>{
      console.log(question);
      return question;
    }))*/
  }
  getAll(){
    return this.http.get(this.baseUrl+'api/questions');
  }
  edit(question:any){
    return this.http.post(this.baseUrl+'api/questions/edit',[question]);
  }
  remove(id:Number){
    return this.http.post(this.baseUrl+"api/questions/remove",id);
  }
}
