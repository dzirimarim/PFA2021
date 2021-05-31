import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Qcm } from 'src/app/models/TestModel/qcm';
import { QcmService } from 'src/app/services/qcm.service';
import { QuestionService } from 'src/app/services/question.service';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-new-test',
  templateUrl: './new-test.component.html',
  styleUrls: ['./new-test.component.scss']
})
export class NewTestComponent implements OnInit {
  testForm = this.fb.group({
    id:[''],
    title: [''],
    category: [''],
    description: [''],
    questions: [[]],
    

  });

  

  categories: any[] | undefined;
  questions: Qcm[] = [];
  listQuestion: any;

  constructor(private fb: FormBuilder,private testServices: TestService,private questionService: QuestionService) { 

    this.questions=[new Qcm()]
    //this.test=new Test('','',this.questions,'');
    this.testServices.getAllcategory().subscribe((data : any)  => {
      this.categories = data;
    });
    this.questionService.getAll().subscribe((res: any)=>{
      this.listQuestion=res
      console.log(res)
    })
    console.log(this.categories);

    


  }

  ngOnInit(): void {
  }


  setExistQuestions(q: { id: any; title: any; level: any; score: any; category: any; maxTime: any; }) {
    let control = this.testForm.value.questions;
    
      control.push(this.fb.group({ 
        id:q.id,
        title: q.title,
        level:q.level, 
        score:q.score,
        category:q.category,
        maxTime:q.maxTime,
        propositions: this.setProposition(q) 
      }))
   
  }

  setProposition(q: { id?: any; title?: any; level?: any; score?: any; category?: any; maxTime?: any; propositions?: any; }) {
    let arr:any[] =  [];
    q.propositions.forEach((p: { id: any; title: any; isTrue: any; }) => {
      arr.push({ 
        id:p.id,
        title: p.title, 
        isTrue:p.isTrue
      })
    })
    return arr;
  }

  onSubmit() {
    console.log(this.testForm.value)
  
    this.testServices.addNewTest(this.testForm.value);
  }

  deleteQuestion(index: number) {
    let control = this.testForm.value.questions;
    control.splice(index,1)
  }

  addNewProposition(questionPropo: { id: string; title: string; isTrue: boolean; }[]) {
    questionPropo.push(
      {
        id:'',
        title: '',
        isTrue:false
      })
  }

  
    addNewQuestion() {
      let control = this.testForm.value.questions;
      control.push(
        {
          id:'',
          title: '',
          level: '', 
          score: '',
          maxTime:'',
          subCategory: '',
          propositions: []
        }
      )
    
  }

  deleteproposition(control: { splice: (arg0: any, arg1: number) => void; }, index: any) {
    control.splice(index,1)
  }

  onClear(){

  }

}
