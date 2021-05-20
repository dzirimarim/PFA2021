import { Component, Input, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-edit-questions',
  templateUrl: './edit-questions.component.html',
  styleUrls: ['./edit-questions.component.scss']
})
export class EditQuestionsComponent implements OnInit {
  @Input() question !: any;
  @Input() isAdmin !:boolean;
  modifie=false
  categories !: any ;
  constructor( private questionService: QuestionService,private testServices:TestService) {
   
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
}

