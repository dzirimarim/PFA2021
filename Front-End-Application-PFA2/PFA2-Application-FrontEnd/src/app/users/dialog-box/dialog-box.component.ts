import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../models/user';
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
  dialog: any;
  user !: User;
  
  constructor(
    public dialogRef: MatDialogRef<UserComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: User) {
    this.data = data;

    //console.log(data.email)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  


}
