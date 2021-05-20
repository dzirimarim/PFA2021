import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Question } from '../models/Question';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'category', 'level'];
  dataSource !:MatTableDataSource<any>;
  question !: Question;
  create:boolean=true;
  loaded !: any ;
  @ViewChild(MatSort) sort !: MatSort;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  private questions !:Array<any>;
  constructor(private questionService:QuestionService) { 
    this.questionService.getAll().subscribe((result: any) => {
      if (result) {
        this.questions = result
        this.dataSource = new MatTableDataSource(this.questions);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort; 
        this.dataSource.data = this.dataSource.data.slice();
        console.log(this.questions)
        this.loaded= result.category;
      }
    })

  }
  ngOnInit() {
  }
  changeStatus(id: any,event: { checked: any; }){
    console.log(id)
    this.questions.forEach(element=>{
      if(element.id===id) {
        if(event.checked){
          element.activated = true
     }else{
      element.activated = false
     }
      this.question=element;
      }
    })
   
  }
  selectQuestion(row: any){
    this.question=row;
    this.create=false;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  addQuestion(){
    this.create=true;
  }
  Update(){
    this.questionService.getAll().subscribe((result: any) => {
      if (result) {
        this.questions = result
        this.dataSource = new MatTableDataSource(this.questions);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort; 
        this.dataSource.data = this.dataSource.data.slice();
        console.log(this.questions)

      }
    })
  }
}

