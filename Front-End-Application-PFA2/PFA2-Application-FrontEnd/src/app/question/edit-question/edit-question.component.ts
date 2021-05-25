import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit {
  @Input() 
  question !: any ;
  modifie=false
  categories !: any ;
  
  constructor( private questionService: QuestionService,private testServices:TestService) {
    //this.toggle();


   }
  toggle(){
    this.modifie=!this.modifie
    console.log(this.modifie)

  }
  ngOnInit() {
    this.testServices.getAllcategory().subscribe((r: any) => {
      this.categories = r;
    });
  }
  edit(){
    this.questionService.addQuestions([this.question])
  }
  cheked(id: any) {
    this.question.propositions.forEach((prop : any) => {
      if (prop.propositionId === id) {
        prop.isTrue = !prop.isTrue;
      }
    })
    console.log(this.question);
  }
  removeQuestion(id: any){
    
    this.questionService.remove(id).subscribe(res=>{
      console.log("ok");  
    })
  }
  reset(){
    console.log ("reset method is activated !! ")
  }
  
}