import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Question } from '../models/question';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'category', 'level'];
  dataSource !:MatTableDataSource<any>;
  question !: Question;
  create:boolean=true;
  loaded !: any ;
  @ViewChild(MatSort) sort !: MatSort;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  private questions !:Array<any>;
  
  constructor(private questionService:QuestionService , public dialog: MatDialog ,private router: Router ) { 
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
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent !: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
   /*openDialog(): void {
     if (this.question && !this.create){
    const dialogRef = this.dialog.open(EditQuestionComponent,
      { data: true }
    );}*/
   /* toEdit (quest : any){
      this.router.navigate(['qedit']);        
    }*/
}





