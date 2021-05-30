import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthComponent, DialogData } from 'src/app/components/register/auth/auth.component';
import { SigninComponent } from 'src/app/components/register/signin/signin.component';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  _trans = true 
  dataDialog :DialogData = {isLogin : false,success : false};
  currentUser: any;
@Input('trans') 
get trans(): boolean {
  return this._trans;
}
set trans(value) {
  this._trans = "" + value == "true";
}
  constructor(public dialog: MatDialog,private router: Router, private auth: RegisterService) { 
    this.auth.currentUser.subscribe(x => {
      this.currentUser = x;

  });
  }

  ngOnInit() {
  }

  openDialog(login: string): void {
    this.dataDialog.isLogin = login == 'true' ? true : false

    const dialogRef = this.dialog.open(AuthComponent,
      { data: this.dataDialog  }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  navigate(url:String){
    this.router.navigate([url]);
  }

  logout(){
    this.auth.logout();
  }
}
