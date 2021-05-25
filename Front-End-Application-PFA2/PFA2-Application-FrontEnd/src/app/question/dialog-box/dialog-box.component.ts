import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Question } from 'src/app/models/question';
import { QuestionComponent } from '../question.component';
export interface DialogData {
  question :any ; 
  id : any ; 
  score : any ; 
  username : any ;
}

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
  //dialog: any;
  
  question !: Question ;
  constructor(public dialogRef: MatDialogRef<QuestionComponent>,
  @Optional() @Inject(MAT_DIALOG_DATA) public data: Question) { 
    this.data = data;
    console.log(data);
   /* this.question = data;
    this.data = data ;
    console.log ("data dialog1  = " + data.level );
    console.log(this.question);*/

  }

  ngOnInit(): void {
  }

}
