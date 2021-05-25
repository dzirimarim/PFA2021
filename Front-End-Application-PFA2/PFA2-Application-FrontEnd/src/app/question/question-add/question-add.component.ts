import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Category } from 'src/app/models/Category';
import { TestService } from 'src/app/services/test.service';
import { QuestionService } from '../../services/question.service';
import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-question-add',
  templateUrl: './question-add.component.html',
  styleUrls: ['./question-add.component.scss']
})
export class QuestionAddComponent implements OnInit {
 

  ngOnInit() {
  }
  testForm:FormGroup;
  categories !: Category[];
  subCategories !:Category[];
  questions:Question[];
  constructor(private fb: FormBuilder, private questionService: QuestionService,private testServices:TestService) {
    this.questions=[new Question()]
    this.testServices.getAllcategory().subscribe((data : any)  => {
      this.categories = data;
    });

this.testForm = this.fb.group({
      questions: this.fb.array([])
    })
    this.setQuestions();
  }

  setQuestions() {
    let control = <FormArray>this.testForm.controls.questions;
    this.questions.forEach(q => {
      control.push(this.fb.group({ 
        title: q.title,
        level:q.level, 
        score:q.score,
        category:q.category,
        maxTime:q.maxTime,
        propositions: this.setProposition(q) }))
    })
  }
  setProposition(q: Question) {
    let arr = new FormArray([])
    q.propositions.forEach(p => {
      arr.push(this.fb.group({ 
        title: p.title, 
        isTrue:p.isTrue
      }))
    })
    return arr;
  }
 
  addNewQuestion() {
    let control = <FormArray>this.testForm.controls.questions;
    control.push(
      this.fb.group({
        title: [''],
        level: [''], 
        score: [''],
        maxTime:[''],
        category: [''],
        propositions: this.fb.array([]
        )
        }));
  }
  deleteQuestion(index: number) {
    let control = <FormArray>this.testForm.controls.questions;
    control.removeAt(index)
  }

  addNewProposition(control: FormGroup[]) {
    control.push(
      this.fb.group({
        title: [''],
        isTrue:[false]
      }))
  }
  onClear() {
    this.testForm.reset();
    this.questionService.initializeFormGroup();
  }

  deleteproposition(control: { removeAt: (arg0: number) => void; } , index : number) {
    control.removeAt(index)
  }
  onSubmit() {
    this.questions=this.testForm.controls.questions.value;
    console.log(this.questions);
    this.questionService.addQuestions(this.questions)
  }
  get userFormGroups () {
    return this.testForm.get('questions') as FormArray
  }

}
