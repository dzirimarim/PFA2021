import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../models/user';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { UserComponent } from '../user/user.component';

export interface DialogData {
  email: string;
  id: number;
  username: string;
  user : any;
}

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent {
  username : string;
  email: string;
  id: number;
  dialog: any;
  user !: User;
  
  constructor(
    public dialogRef: MatDialogRef<UserComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: User) {
    console.log(data.email)
    this.data = data;

    console.log(data.email)
    this.username = data.username;
    this.email = data.email; 
    this.id = data.id;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  Edit(){
  
    this.openDialog();
    }
  openDialog(): void {
    console.log(this.data);
   

  }
  


}
