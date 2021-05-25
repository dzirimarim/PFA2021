import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Question } from '../models/question';
import { QuestionService } from '../services/question.service';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

export interface DialogData {
  quest : Question ;
  id : any ; 
  score : any ; 
  username : any ;
}

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'category', 'level'];
  dataSource !:MatTableDataSource<any>;
  question : any;
  create:boolean=true;
  loaded !: any ;
  @ViewChild(MatSort) sort !: MatSort;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  private questions !:Array<any>;
 // data !: DialogData;
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

  selectQuestion(row: Question){
    this.question=row;
    this.create=false;
    console.log(row)
   // this.email = row.email;
    //this.id = row.id;
    //this.username = row.username;
    this.openDialog(row);
  }
  data !: DialogData;
  openDialog(obj: Question ): void {
    console.log(obj);
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '100%',
      //minHeight: 'calc(100vh - 90px)',
      height: 'auto',
      data : obj ,
      
    });
console.log(obj) ;
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
}





