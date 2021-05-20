import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Category } from '../models/Category';
import { Question } from '../models/Question';
import { Test } from '../models/Test';
import { QuestionService } from '../services/question.service';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {



 testForm:FormGroup;
  test: Test;
  categories: Category[] | undefined;
  questions:Question[];
  listQuestion: any;
  constructor(private fb: FormBuilder, private testServices: TestService,private questionService: QuestionService) {
    this.questions=[new Question()]
    this.test=new Test('','',this.questions,'');
    this.testServices.getAllcategory().subscribe((data : any)  => {
      this.categories = data;
    });
    this.questionService.getAll().subscribe((res: any)=>{
      this.listQuestion=res
      console.log(res)
    })
    console.log(this.categories);

    this.testForm = this.fb.group({
      id:[''],
      title: [''],
      category:[''],
      description:[''],
      questions: this.fb.array([])
    })

    this.setQuestions();

  }

  setExistQuestions(q: { id: any; title: any; level: any; score: any; category: any; maxTime: any; }) {
    let control = <FormArray>this.testForm.controls.questions;
    
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
  setQuestions() {
    let control = <FormArray>this.testForm.controls.questions;
    this.test.questions.forEach((q) => {
      control.push(this.fb.group({ 
        id:q.id,
        title: q.title,
        level:q.level, 
        score:q.score,
        category:q.category,
        maxTime:q.maxTime,
        propositions: this.setProposition(q) }))
    })
  }
  setProposition(q: { id?: any; title?: any; level?: any; score?: any; category?: any; maxTime?: any; propositions?: any; }) {
    let arr = new FormArray([])
    q.propositions.forEach((p: { id: any; title: any; isTrue: any; }) => {
      arr.push(this.fb.group({ 
        id:p.id,
        title: p.title, 
        isTrue:p.isTrue
      }))
    })
    return arr;
  }
  onSubmit() {
    this.test=this.testForm.value;
    console.log(this.test);
    this.testServices.addNewTest(this.test);
  }
  addNewQuestion() {
    let control = <FormArray>this.testForm.controls.questions;
    control.push(
      this.fb.group({
        id:[''],
        title: [''],
        level: [''], 
        score: [''],
        maxTime:[''],
        subCategory: [''],
        propositions: this.fb.array([])
      })
    )
  }
  deleteQuestion(index: number) {
    let control = <FormArray>this.testForm.controls.questions;
    control.removeAt(index)
  }
  addNewProposition(control: FormGroup[]) {
    control.push(
      this.fb.group({
        id:[''],
        title: [''],
        isTrue:[false]
      }))
  }
  deleteproposition(control: { removeAt: (arg0: any) => void; }, index: any) {
    control.removeAt(index)
  }
  get userFormGroups () {
    return this.testForm.get('questions') as FormArray
  }

}
