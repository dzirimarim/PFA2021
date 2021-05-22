import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationComponent } from '../authentication/authentication.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  _trans = true 

@Input('trans') 
get trans(): boolean {
  return this._trans;
}
set trans(value) {
  this._trans = "" + value == "true";
}
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(login: string): void {
    const dialogRef = this.dialog.open(AuthenticationComponent,
      { data: login == 'true' ? true : false }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
