import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthComponent, DialogData } from 'src/app/components/register/auth/auth.component';
import { SigninComponent } from 'src/app/components/register/signin/signin.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  dataDialog :DialogData = {isLogin : true,success : false};

  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AuthComponent,
      { data: this.dataDialog }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
